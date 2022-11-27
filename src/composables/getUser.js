import { ref } from "vue";
import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signUserOut,
  onAuthStateChanged,
} from "firebase/auth";

import { useRouter } from "vue-router";

import { auth } from "@/assets/firebase/config";

const user = ref(auth.currentUser);

const router = useRouter();
onAuthStateChanged(auth, (_user) => {
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
