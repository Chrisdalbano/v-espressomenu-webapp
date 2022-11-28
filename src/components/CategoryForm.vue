<template>
  <ul>
    <li @click="toggleContent"> {{ categoryName }} - {{ spentSoFar }}</li>
    <form v-if="contentIsVisible">
        <ul @click="toggleContent">Spent ${{ spentTarget }} of target ${{ spentSoFar }}</ul>
        <button @click="$emit('delete-category', id)" type="button">Delete</button>
    </form>
  </ul>
</template>

<script>
export default {
props: {
    id:{
        type: String,
        required: true
    },
    categoryName:{
        type: String,
        required: true
    },
    spentSoFar: {
        type: String,
        required: true
    }
},
emits: ['delete-category'],
data() {
    return{
        contentIsVisible: false
    }
}
}
</script>

<style>

</style>