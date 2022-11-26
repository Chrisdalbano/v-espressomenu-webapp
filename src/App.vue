<script>
import { useAuth } from "@/stores/auth";

export default {
  name: "App",
  setup() {
    const auth = useAuth();

    auth.setup();
  },
};
</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
