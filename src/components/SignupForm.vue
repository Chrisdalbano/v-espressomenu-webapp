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
    <div class="error" v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useAuth } from "@/stores/auth";

export default {
  setup() {
    const { signUp } = useAuth();
    const error = ref(null);
    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      error.value = await signUp(email.value, password.value, displayName.value);
    };

    return { error, displayName, email, password, handleSubmit };
  },
};
</script>

<style></style>
