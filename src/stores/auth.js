import { ref } from "vue";
import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signUserOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";

import { useRouter } from "vue-router";

import { auth } from "@/assets/firebase/config";

export const useAuth = defineStore("auth", () => {
  const user = ref();

  async function setup() {
    const router = useRouter();
    onAuthStateChanged(auth, (data) => {
      if (data) {
        user.value = data;
        router.push("/");
      } else {
        user.value = null;
        router.push("/login");
        
      }
      console.log(user.value ? "User signed in" : "User signed out");
    });
  }
  
  async function signIn(email, password) {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      user.value = credentials.user;
    } catch (error) {
      console.error(error);
    }
  }

  async function signUp(email, password, displayName) {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        displayName
      );
      if (!credentials) {
        throw new Error("Could not complete the Sign up");
      }
      // await updateProfile(auth.currentUser, { displayName });
      await updateProfile(auth.currentUser, { displayName })
      user.value = credentials.user;
    } catch (err) {
      console.log(err);
    }
  }

  async function signOut() {
    await signUserOut(auth);
  }

  return {
    auth,
    user,
    setup,
    signIn,
    signUp,
    signOut,
  };
});
