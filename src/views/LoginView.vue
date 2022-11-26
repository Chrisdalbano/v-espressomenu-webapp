<template>
  <div class="welcome container">
    <img class="dr-logo" src="../assets/dr-logo.svg" />
    <!-- <p>Welcome</p> -->
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm />
      <p>
        Don't have an account?
        <span @click="showLogin = false">Sign up</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm />
      <p>
        Already have an account?
        <span @click="showLogin = true">Log in</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router"

import { useAuth } from "@/stores/auth";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);

    const router = useRouter();
    const auth = useAuth();

    if (auth.user) router.push("/")

    return { showLogin };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
  background: rgb(235, 235, 235);
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
.welcome button:hover {
  opacity: 85%;
  cursor: pointer;
}
.dr-logo {
  width: 15%;
}
.dr-logo:hover {
  opacity: 85%;
}
</style>
