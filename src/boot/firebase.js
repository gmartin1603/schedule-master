/*
@file src/boot/firebase.js
This file is the Quasar boot file that sets up the connection to the projects Firebase backend.
It is executed before the root Vue.js application is instantiated.
*/

// import something here
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ProductionConfig from "../private/productionConfig.json";
import StagingConfig from "../private/stagingConfig.json";
import userListener from "../listeners/usersListener";
import jobsListener from "../listeners/jobsListener";

const firebaseApp = initializeApp(StagingConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export default async ({ app, router, store, Vue }) => {
  onAuthStateChanged(auth, async (userObj) => {
    console.log("AuthStateChanged Ran");
    if (userObj) {
      // console.log(`${userObj.email} signed in`);
      // console.log(userObj);
      await userListener();
      await jobsListener("csst");
      await jobsListener("casc");

      router.replace("/");
    } else {
      console.log(`No one is signed in`);
      router.replace("/auth/login");
    }
  });

  // router.beforeEach((to, from, next) => {
  //   let currentUser = auth.currentUser;
  //   console.log(auth);
  //   console.log("currentUser", currentUser);
  //   // let requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  //   console.log("to", to, "from", from);
  //   if (!currentUser && to.path !== "/auth/login") {
  //     console.log("Needs to be logged in .. redirecting to login");
  //     next("auth/login");
  //   }
  //   next();
  // });
};

export { firebaseApp, db, auth };
