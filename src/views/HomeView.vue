<script setup>
import NewLogForm from "../components/NewLogForm.vue"
import Navbar from "../components/Navbar.vue";
// import LogWindow from "../components/LogWindow.vue"
import { useAuth } from "@/stores/auth";

const auth = useAuth();

</script>

<template>
  <div v-if="auth.user" class="container">
    <Navbar />
    <!-- <LogWindow /> -->
    <NewLogForm/>
  </div>
</template>
