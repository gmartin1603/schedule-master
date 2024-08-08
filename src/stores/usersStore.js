import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  getters: {
    getById: (state) => (id) => state.users.find((user) => user.id === id),
    getUsersByDept: (state) => (dept) =>
      state.users.filter((user) => user.dept === dept),
    getAllUsers: (state) => state.users,
  },
  actions: {
    setUsers(users) {
      this.users = users;
    },
  },
});
