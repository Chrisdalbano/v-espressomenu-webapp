<template>
  <section>
    <header>
      <h1>Espresso Menu</h1>
    </header>
    <h2>This is an espresso menu.</h2>
    <p>below you will find a list of espresso drinks</p>
    <new-drink @add-drink="addDrink"></new-drink>
    <ul>
      <drink-info
        v-for="drink in drinks"
        :key="drink.id"
        :id="drink.id"
        :name="drink.name"
        :drink-size="drink.size"
        :base-flavor="drink.flavor"
        :drink-ingredients="drink.ingredients"
        :drink-story="drink.story"
        :is-favorite="drink.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-drink="deleteDrink"

      ></drink-info>
    </ul>
  </section>
</template>

<script>
import NewDrink from './components/NewDrink.vue';
export default {
  components: { NewDrink },
  methods: {
    toggleFavoriteStatus(drinkId){
      const identifiedDrink = this.drinks.find(drink => drink.id === drinkId);
      identifiedDrink.isFavorite = !identifiedDrink.isFavorite
    }, 
    addDrink(name, size, ingredients, flavor, story){
      const newDrink = {
        id: new Date().toISOString(),
        name: name,
        size: size,
        ingredients: ingredients,
        flavor: flavor,
        story: story,
        isFavorite: false
      };
      this.drinks.push(newDrink);
      console.log("ID: ", newDrink.id); 
    },
    deleteDrink(drinkId){
      this.drinks = this.drinks.filter((drink) => drink.id !== drinkId);
    }
  },
  data(){
    return{
      drinks: [
        {
          id: "doppio",
          name: "Doppio Espresso",
          size: "2 oz",
          ingredients: "espresso",
          flavor: "bitter",
          story: "comes from italian",
          isFavorite: true
        },
        {
          id: "macchiato",
          name: "Espresso Machiato",
          size: "3 oz",
          ingredients: "espresso",
          flavor: "bitter",
          story: "comes from italian"
        },
        {
          id: "latte",
          name: "Cafe Latte",
          size: "12 oz",
          ingredients: "espresso",
          flavor: "bitter",
          story: "comes from italian"
        }
      ]
    }
  }
};
</script>

<style></style>
