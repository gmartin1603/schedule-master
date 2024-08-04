import { defineStore } from "pinia";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  getters: {
    jobById: (state) => (id) => state.jobs.find((job) => job.id === id),
    jobsByDept: (state) => (dept) =>
      state.jobs.filter((job) => job.dept === dept),
    fetchAll: (state) => state.jobs,
  },
  actions: {
    set(jobs) {
      this.jobs = jobs;
    },
    merge(jobs) {
      let update = this.jobs;
      jobs.forEach((job) => {
        let index = update.findIndex(
          (j) => j.id === job.id && j.dept === job.dept
        );
        if (index === -1) {
          update.push(job);
        } else {
          update[index] = job;
        }
      });
      this.jobs = update;
    },
  },
});
