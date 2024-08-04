<template>
  <q-page class="flex q-pa-sm">
    <div class="q-gutter-y-md full-width">
      <q-tabs
        v-model="activeTab"
        dense
        align="justify"
        class="bg-primary text-white shadow-2"
        :breakpoint="0"
      >
        <q-tab name="Users" icon="person" />
        <q-tab name="Jobs" icon="group" />
        <q-tab name="Settings" icon="settings" />
      </q-tabs>

      <q-separator/>

      <q-tab-panels v-model="activeTab" animated>
          <q-tab-panel name="Users">
            <users-tab />
          </q-tab-panel>

          <q-tab-panel name="Jobs">
            <jobs-tab />
          </q-tab-panel>

          <q-tab-panel name="Settings">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useUsersStore } from 'stores/usersStore';
import usersService from '../services/usersService';
import UsersTab from 'components/dashboard/UsersTab.vue';
import JobsTab from 'components/dashboard/JobsTab.vue';

defineOptions({
  name: 'DashboardPage'
});

const activeTab = ref('Users');



</script>
