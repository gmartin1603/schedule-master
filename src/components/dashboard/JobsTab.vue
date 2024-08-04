<template>
  <div>
    <h6>JobsTab</h6>
    <q-list>
      <q-item
        v-for="job in jobs"
        :key="job.id"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label>{{ job.label }} {{ job.id }}</q-item-label>
          <q-item-label caption>{{ job.dept }} {{ job.group }}</q-item-label>
          <!-- <q-item-label caption><pre>{{ job }}</pre></q-item-label> -->
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref, reactive, computed, defineComponent } from 'vue'
// import jobsService from '../../services/jobsService'
import {useJobsStore} from '../../stores/jobsStore'

defineComponent({
  name: 'JobsTab',
})

const jobsStore = useJobsStore();

const jobs = ref(jobsStore.jobs);

</script>
