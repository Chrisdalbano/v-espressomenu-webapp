<template>
  <nav>
    <div>
      <p>Hey there {{ auth.user.displayName }}</p>
      <p class="email">Currently logged in as... email</p>
    </div>
    <button @click="auth.signOut">Log out</button>
  </nav>
</template>

<script setup>
import { useAuth } from "@/stores/auth";
// import getUser from "../composables/getUser"

const auth = useAuth();
// const user = getUser();

</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}

nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
