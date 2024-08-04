import { useUsersStore } from "src/stores/usersStore";
import commonService from "./commonService";

const store = useUsersStore();

const usersService = {
  getUsers: (data) => {
    let users = store.fetchAll;
    if (users.length > 0) {
      return new Promise((resolve, reject) => {
        resolve({ data: users });
      });
    } else {
      // Call the API to get the users
      return commonService.commonAPI("users/getUsers", data);
    }
  },

  addUser: (data) => {
    return commonService.commonAPI("users/newUser", data);
  },

  editUser: (data) => {
    return commonService.commonAPI("users/updateUser", data);
  },

  disableUser: (data) => {
    return new Promise((resolve, reject) => {
      let rand_int = Math.floor(Math.random() * 10);
      setTimeout(() => {
        if (rand_int % 2 === 0) reject({ data: { status: "error" } });
        resolve({ data: { status: "success" } });
      }, 1000);
    });
    return commonService.commonAPI("users/disableUser", data);
  },

  deleteUser: (data) => {
    return commonService.commonAPI("users/deleteUser", data);
  },
};

export default usersService;
