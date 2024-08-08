<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import authService from 'src/services/authService';

defineOptions({
  name: 'App'
});

onMounted(async () => {
  // await authService.login('admin@otm.com', 'test1234');
});

</script>
