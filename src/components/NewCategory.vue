<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Category name</label>
      <input type="text" v-model="enteredCategoryName" />
    </div>
    <div>
      <label
        >Maximum Spending Goal (Amount that you want to be your maximum)</label
      >
      <input type="text" v-model="enteredTargetSpending" />
    </div>
    <div>
      <label>Spent so far (Usually starts on 0!)</label>
      <input type="text" v-model="enteredSpentSoFar" />
    </div>
    <div>
      <button>Add category</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-category"],
  data() {
    return {
      enteredCategoryName: "",
      enteredTargetSpending: "",
      enteredSpentSoFar: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-category",
        this.enteredCategoryName,
        this.enteredTargetSpending,
        this.enteredSpentSoFar
      );
    },
  },
};
</script>

<style></style>
