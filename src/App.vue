<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { loginWithEmailPassword } from 'src/services/authService';

defineOptions({
  name: 'App'
});

onMounted(async () => {
  await loginWithEmailPassword('admin@otm.com', 'test1234');
});

</script>
