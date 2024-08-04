import { auth } from "boot/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function loginWithEmailPassword(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    // set current user context
    console.log(user);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
