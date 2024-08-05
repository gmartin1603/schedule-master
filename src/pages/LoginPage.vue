<template>
  <q-page class="bg-image flex flex-center">
    <q-page-container class="full-width">
      <q-card class="q-mx-md" style="max-width: 350px; margin: 0 auto;">
        <q-card-section>
          <q-card class="q-pa-md">
            <q-card-section class="flex flex-center">
              <q-img
                :src="logo"
                style="width: 100px; height: 100px; margin: 0 auto;"
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
import imageUrl from '../assets/BeanField.jpg'
import logo from '../assets/logo.png'
import { useQuasar } from 'quasar';

defineComponent({
  name: 'LoginPage',
})

const q = useQuasar()

const state = reactive({
  email: '',
  password: '',
  error: '',
  loading: false,
  resetLoading: false,
})

const disabled = computed(() => !state.email || !state.password)

const login = () => {
  state.loading = true
  setTimeout(() => {
    q.notify({
      color: 'negative',
      icon: 'report_problem',
      message: 'Invalid email or password',
    })
    state.error = 'Invalid email or password'
    state.loading = false
  }, 1000)
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
    background-image: url(../assets/BeanField.jpg);
    background-repeat: no-repeat;
  }
</style>
