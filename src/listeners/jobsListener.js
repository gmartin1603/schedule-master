import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../boot/firebase";
import { useJobsStore } from "src/stores/jobsStore";

const jobsListener = (dept) => {
  console.log("Jobs Listener: RUNNING");
  const jobsStore = useJobsStore();
  const q = query(collection(db, dept), orderBy("order"));

  return new Promise((resolve, reject) => {
    try {
      console.log("Jobs Listener: RUNNING");
      onSnapshot(q, (qSnap) => {
        let arr = [];
        qSnap.forEach((doc) => {
          arr.push(doc.data());
        });
        // Update jobs in the store
        console.log(arr);
        jobsStore.merge(arr);
        console.log("Jobs Listener: COMPLETE");
        resolve(arr);
      });
    } catch (error) {
      console.log("Jobs Listener Error: ", error);
      reject(error);
    }
  });
};

export default jobsListener;
