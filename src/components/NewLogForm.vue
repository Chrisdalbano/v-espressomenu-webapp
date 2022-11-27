<template>
  <form>
    <textarea
      placeholder="Type some text and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    >
    </textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import { useAuth } from "@/stores/auth";
import { Timestamp } from "@firebase/firestore";
import { useCollection } from "../composables/useCollection";
export default {
  setup() {
    const auth = useAuth();
    const message = ref("");
    const { add } = useCollection("messages");

    const handleSubmit = async () => {
      const chat = {
        name: auth.user.displayName,
        message: message.value,
        createdAt: Timestamp.fromDate(new Date()),
      };
      await add(chat);
    };
    return { message, handleSubmit };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
