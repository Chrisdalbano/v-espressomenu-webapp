<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="Display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Create Account</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useAuth } from "@/stores/auth";

export default {
  setup() {
    const { signUp } = useAuth();

    //refs
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      signUp(email.value, password.value, displayName.value);
    };

    return { displayName, email, password, handleSubmit };
  },
};
</script>

<style></style>
