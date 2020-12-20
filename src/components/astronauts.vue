<template>
  <div>
    <astronaut
        v-for="astro in astronautes.results"
        :ast="astro"/>
  </div>

  <paging :list="astronautes"/>
</template>


<script>

import Astronaut from "./childrenComponents/astronaut.vue";
import Paging from "./childrenComponents/paging.vue";
import axios from 'axios';

export default {
  name: "astronauts",
  components: {Paging, Astronaut},
  data() {
    return {
      astronautes: {results: null}
    }
  },
  watch: {
    "$route": "fetchData"
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    getApiRqtUrl() {
      return "https://spacelaunchnow.me/api/3.3.0/astronaut/?limit=30&offset=" + ((this.$route.query.page - 1) * 30)
    },
    fetchData() {
      axios
          .get(this.getApiRqtUrl())
          .then((response) => {
            this.astronautes = response.data;
            console.log(this.astronautes)
          })
          .catch((error) => {
            this.$router.push('/e429')
          })
      console.log(this.$route)
    }
  }
}


</script>


<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
}
</style>