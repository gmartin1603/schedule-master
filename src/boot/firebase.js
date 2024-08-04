/*
@file src/boot/firebase.js
This file is the Quasar boot file that sets up the connection to the projects Firebase backend.
It is executed before the root Vue.js application is instantiated.
*/

// import something here
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import ProductionConfig from "../private/productionConfig.json";
import StagingConfig from "../private/stagingConfig.json";

// "async" is optional!
// remove it if you don't need it
export default async (
  {
    /* app, router, store */
  }
) => {
  // something to do
};
