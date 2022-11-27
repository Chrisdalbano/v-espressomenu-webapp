<script setup>
import Navbar from "../components/Navbar.vue"
import { useAuth } from "@/stores/auth";
const auth = useAuth()
</script>

<template>
  <div v-if="auth.user" class="container">
    <Navbar/>
  </div>
</template>
