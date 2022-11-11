<template>
  <section>
    <header>
      <h1>Espresso Menu</h1>
    </header>
    <h2>This is an espresso menu.</h2>
    <p>below you will find a list of espresso drinks</p>
    <ul>
      <drink-info
        v-for="drink in drinks"
        :key="drink.id"
        :name="drink.name"
        :drink-size="drink.size"
        :base-flavor="drink.flavor"
        :drink-contains="drink.contains"
        :drink-story="drink.story"
        :is-favorite="false"
      ></drink-info>
    </ul>
  </section>
</template>

<script>
export default {
  data(){
    return{
      drinks: [
        {
          id: "doppio",
          name: "Doppio Espresso",
          size: "2 oz",
          contains: "espresso",
          flavor: "bitter",
          story: "comes from italian",
          isFavorite: true
        },
        {
          id: "macchiato",
          name: "Espresso Machiato",
          size: "3 oz",
          contains: "espresso",
          flavor: "bitter",
          story: "comes from italian"
        },
        {
          id: "latte",
          name: "Cafe Latte",
          size: "12 oz",
          contains: "espresso",
          flavor: "bitter",
          story: "comes from italian"
        }
      ]
    }
  }
};
</script>

<style></style>
