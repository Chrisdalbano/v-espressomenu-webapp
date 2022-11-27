<template>
  <form>
    <textarea
      placeholder="Type some text and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    >
    </textarea>
    <div class="error">
      {{ error }}
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useAuth } from "@/stores/auth";
import { Timestamp } from "@firebase/firestore";
import useCollection from "../composables/useCollection";
export default {
  setup() {
    const auth = useAuth();
    const message = ref("");
    const { addDoc, error } = useCollection("messages");

    const handleSubmit = async () => {
      const chat = {
        name: auth.user.displayName,
        message: message.value,
        createdAt: Timestamp.fromDate(new Date()),
      };

      // console.log(chat);
      await addDoc(chat);
      if (!error.value) {
        message.value = '';
      }
    };
    return { message, handleSubmit, error };
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
