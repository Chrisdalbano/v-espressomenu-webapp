<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Log in</button>
    <div class="error" v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";

import { useAuth } from "@/stores/auth";
import { errorPrefix } from "@firebase/util";

export default {
  setup() {
    //refs

    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const { signIn } = useAuth();
    const error = ref(null);

    const handleSubmit = async () => {
      error.value = await signIn(email.value, password.value);
    };

    return { error, email, password, handleSubmit };
  },
};
</script>

<style></style>
