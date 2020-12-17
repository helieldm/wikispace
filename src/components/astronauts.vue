<template>
  <div>
  <astronaut
      v-for="astro in astronautes"
      :ast="astro" />
  </div>
</template>



<script>

import Astronaut from "./astronaut.vue";
import axios from 'axios';
export default {
  name: "astronauts",
  components: {Astronaut},
  data() {
    return { astronautes: null}
  },
  mounted()
  {
    axios
        .get('https://spacelaunchnow.me/api/3.3.0/astronaut/?limit=30')
        .then((response) =>
        {
          this.astronautes = response.data.results;
          console.log(this.astronautes)
        });
  }
}


</script>



<style scoped>
div{
  display: flex;
  flex-wrap: wrap;
}
</style>