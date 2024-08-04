import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  getters: {
    userById: (state) => (id) => state.users.find((user) => user.id === id),
    usersByDept: (state) => (dept) =>
      state.users.filter((user) => user.dept === dept),
    fetchAll: (state) => state.users,
  },
  actions: {
    setUsers(users) {
      this.users = users;
    },
  },
});
