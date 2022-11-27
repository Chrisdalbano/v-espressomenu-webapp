<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from "vue";

import { useAuth } from "@/stores/auth";

export default {
  setup() {
    //refs
    
    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const { error, signIn } = useAuth();

    const handleSubmit = async () => {
      await signIn(email.value, password.value, displayName.value);
      if(!error.value){
        console.log('user logged in');
      }
    };

    return { email, password, displayName, handleSubmit };
  },
};
</script>

<style></style>
