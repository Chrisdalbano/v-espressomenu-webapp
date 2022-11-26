<script setup>
import { useAuth } from "@/stores/auth";

const auth = useAuth();
</script>

<template>
  <div v-if="auth.user">
    <p>User:</p>
    <p>{{ auth.user }}</p>
    <button @click="auth.signOut">Log out</button>
  </div>
</template>
