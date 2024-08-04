import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../boot/firebase";
import { useUsersStore } from "src/stores/usersStore";

const userListener = () => {
  console.log("User Listener: RUNNING");
  const usersStore = useUsersStore();
  const q = query(collection(db, "users"), orderBy("startDate"));

  return new Promise((resolve, reject) => {
    try {
      console.log("User Listener: RUNNING");
      onSnapshot(q, (qSnap) => {
        let arr = [];
        qSnap.forEach((doc) => {
          arr.push(doc.data());
        });
        // Set users in the store
        usersStore.setUsers(arr);
        // console.log(arr);
        console.log("User Listener: COMPLETE");
        resolve(arr);
      });
    } catch (error) {
      console.log("User Listener Error: ", error);
      reject(error);
    }
  });
};

export default userListener;
