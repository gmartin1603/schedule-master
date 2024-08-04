<template>
  <div>
    <h6>UsersTab</h6>
    <q-list>
      <q-item
        v-for="user in users"
        :key="user.id"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label>{{ user.dName }}</q-item-label>
          <q-item-label caption>{{ user.email }}</q-item-label>
          <q-item-label caption>{{ user }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref, reactive, computed, defineComponent, onMounted } from 'vue'
import usersService from '../../services/usersService'

defineComponent({
  name: 'UsersTab',
})
const users = ref([]);

onMounted(() => {
  console.log('Users tab mounted');
  usersService.getUsers().then((res) => {
    // console.log(res);
    users.value = res.data;
  });
});

</script>
