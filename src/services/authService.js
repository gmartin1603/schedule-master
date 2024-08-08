import { auth } from "boot/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const authService = {
  login: async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // set current user context
      console.log(user);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};

export default authService;
