<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Drink name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Drink size (oz)</label>
      <input type="text" v-model="enteredSize" />
    </div>
    <div>
      <label>Ingredients</label>
      <input type="text" v-model="enteredIngredients" />
    </div>
    <div>
      <label>Base flavor</label>
      <input type="text" v-model="enteredFlavor" />
    </div>
    <div>
      <label>Story of name</label>
      <input type="text" v-model="enteredStory" />
    </div>
    <div>
      <button>Add drink</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-drink"],
  data() {
    return {
      enteredName: "",
      enteredSize: "",
      enteredIngredients: "",
      enteredFlavor: "",
      enteredStory: ""
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-drink",
        this.enteredName,
        this.enteredSize,
        this.enteredIngredients,
        this.enteredFlavor,
        this.enteredStory
      );
    },
  },
};
</script>
