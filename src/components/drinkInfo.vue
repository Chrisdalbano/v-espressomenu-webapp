<template>
  <ul>
    <li @click="toggleContent">{{ name }} {{ isFavorite ? '(*)' : ''}} - {{ drinkSize }}</li>
    <form v-if="contentIsVisible">
      <ul>
        <li>
          <strong>Base flavor: </strong>
          {{ baseFlavor }}
        </li>
        <li>
          <strong>ingredients: </strong>
          {{ drinkIngredients }}
        </li>
        <li>
          <strong>Story of the name: </strong>
          {{ drinkStory }}
        </li>
      </ul>

      <button @click="toggleContent">Close</button>
      <button @click="makeDrink" type="button">Make it</button>
      <button @click="toggleFavorite" type="button">Mark as favorite</button>
      <button @click="deleteDrink">Delete</button>
    </form>
  </ul>
</template>

<script>
export default {
  //props: ["name", "drinkSize", "baseFlavor", "drinkingredients", "drinkStory", IsFavorite"],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    baseFlavor: {
      type: String,
      required: true
    },
    drinkIngredients: {
      type: String,
      required: true,
    },
    drinkStory: {
      type: String,
      required: false
    },
    drinkSize:{
      type: String,
      required: true
    },
    isFavorite:{
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: {
    'toggle-favorite': function(id) {
      if(id){
        return true;
      } else {
        console.warn('Id is missing')
        return false;
      }
    }
  },
  data() {
    return {
      contentIsVisible: false,
    };
  },
  methods: {
    toggleContent() {
      this.contentIsVisible = !this.contentIsVisible;
    },
    makeDrink(){
      alert("Drink crafted!");
    },
    toggleFavorite(){
      this.$emit('toggle-favorite', this.id);
    }
  },
};
</script>
}

<style></style>
