<template>
  <q-page class="bg-image flex flex-center">
    <q-page-container class="full-width">
      <q-card class="q-mx-md bg-primary" style="max-width: 350px; margin: 0 auto;">
        <q-card-section>
          <q-card class="q-pa-md">
            <q-card-section class="flex flex-center q-mb-md">
              <q-img
                :src="logo"
                style="height: 100px; margin: 0 auto;"
              />
            </q-card-section>
            <q-card-section>
              <q-input
                v-model="state.email"
                label="Email"
                dense
                outlined
              />
            </q-card-section>
            <q-card-section>
              <q-input
                v-model="state.password"
                label="Password"
                type="password"
                dense
                outlined
              />
            </q-card-section>
            <q-card-section class="flex justify-between">
              <q-btn
                color="primary"
                label="Login"
                @click="login"
                :disable="disabled"
                :loading="state.loading"
              />
              <q-btn
                color="secondary"
                label="Forgot Password"
                @click="forgotPassword"
                :disable="state.loading || state.resetLoading"
                :loading="state.resetLoading"
              />
            </q-card-section>
            <q-card-section v-if="state.error">
              <div
                class="bg-negative text-white q-pa-md rounded-borders shadow-2"
                style="text-align: center;"
              >
                <q-icon name="report_problem" />
                {{ state.error }}
              </div>
            </q-card-section>
          </q-card>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script setup>
import { ref, reactive, computed, defineComponent } from 'vue'
import imageUrl from '../assets/images/BeanField.jpg'
import logo from '../assets/images/Logo-Cargill.png'
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import authService from 'src/services/authService'

defineComponent({
  name: 'LoginPage',
})

const q = useQuasar()
const router = useRouter()

const state = reactive({
  email: '',
  password: '',
  error: '',
  loading: false,
  resetLoading: false,
})

const disabled = computed(() => !state.email || !state.password)

const login = async () => {
  state.loading = true

  const success = await authService.login(state.email, state.password);

  if (!success) {
    state.email = ''
    state.password = ''
    q.notify({
      color: 'negative',
      icon: 'report_problem',
      message: 'Invalid email or password',
    })
    state.error = 'Invalid email or password'
  } else {
    state.error = ''
    router.replace('/')
  }

  state.loading = false
}

const forgotPassword = () => {
  if (!state.email) {
    q.notify({
      color: 'negative',
      icon: 'report_problem',
      message: 'Please enter your registered email',
    })
    return
  }
  state.resetLoading = true
  setTimeout(() => {
    state.resetLoading = false
    q.notify({
      color: 'info',
      icon: 'email',
      message: 'Password reset instructions sent to your email',
    })
  }, 1000)
}

</script>

<style scoped>
  .bg-image {
    background-image: url(../assets/images/BeanField.jpg);
    background-repeat: no-repeat;
  }
</style>
