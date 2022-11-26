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

    const { signIn } = useAuth();

    const handleSubmit = () => {
      signIn(email.value, password.value);
    };

    return { email, password, handleSubmit };
  },
};
</script>

<style></style>
