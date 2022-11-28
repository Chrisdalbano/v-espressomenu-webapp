<script setup>
import Navbar from "../components/Navbar.vue";
import { useAuth } from "@/stores/auth";
import CategoryForm from "../components/CategoryForm.vue"
import NewCategory from "../components/NewCategory.vue"



const categories = [
  {
    id: "food",
    categoryName: "Food",
    targetSpending: "100",
    spentSoFar: "10",
  },
  {
    id: "shopping",
    categoryName: "Shopping",
    targetSpending: "100",
    spentSoFar: "20",
  },
  {
    id: "transportation",
    categoryName: "Transportation",
    targetSpending: "100",
    spentSoFar: "20",
  },
];

const auth = useAuth();
const addCategory = (categoryName, targetSpending, spentSoFar) => {
  const newCategory = {
    id: new Date().toISOString(),
    categoryName: categoryName,
    targetSpending: targetSpending,
    spentSoFar: spentSoFar,
  };
  this.categories.push(newCategory);
  console.log("CATEGORY_ID: ", newCategory.id);
  return addCategory;
};
const deleteCategory = (categoryId) => {
  this.categories = this.categories.filter(
    (category) => category.id !== categoryId
  );
  return deleteCategory;
};




// components: { NewCategory },
// data() {
//   return{
//     categories: [
// {
//   id: "food",
//   categoryName: "Food",
//   targetSpending: "100",
//   spentSoFar: "10"
// },
// {
//   id: "shopping",
//   categoryName: "Shopping",
//   targetSpending: "100",
//   spentSoFar: "20"
// },
// {
//   id: "transportation",
//   categoryName: "Transportation",
//   targetSpending: "100",
//   spentSoFar: "20"
// }
//     ]
//   }
// },
// methods: {
//   addCategory(categoryName, targetSpending, spentSoFar){
//     const newCategory = {
//       id: new Date().toISOString(),
//       categoryName: categoryName,
//       targetSpending: targetSpending,
//       spentSoFar : spentSoFar

//     };
//     this.categories.push(newCategory);
//     console.log("CATEGORY_ID: ", newCategory.id);
//   },
//   deleteCategory(categoryId){
// this.categories = this.categories.filter((category) => category.id !== categoryId);
//   }
// }
</script>

<template>
  <div v-if="auth.user" class="container">
    <Navbar />
    <!-- <LogWindow /> -->
    <!-- <NewLogForm/> -->
    <NewCategory @add-category="addCategory" />
    <ul>
      <CategoryForm
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :categoryName="category.categoryName"
        :targetSpending="category.targetSpending"
        :spentSoFar="category.spentSoFar"
        @delete-category="deleteCategory"
      />
    </ul>
    <section></section>
  </div>
</template>
