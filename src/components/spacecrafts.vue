<template>
  <div>
    <ship
        v-for="ship in vessels.results"
        :sh="ship"/>
  </div>
  <Paging :list="vessels" type="spacecraft"/>
</template>


<script>

import Ship from "./childrenComponents/ship.vue";
import Paging from "./childrenComponents/paging.vue";
import axios from 'axios';

export default {
  name: "spacecrafts",
  components: {Ship, Paging},
  data() {
    return {
      vessels: {results: null},
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
      return "https://spacelaunchnow.me/api/3.3.0/spacecraft/?limit=30&offset=" + ((this.$route.query.page - 1) * 30)
    },
    fetchData() {
      axios
          .get(this.getApiRqtUrl())
          .then((response) => {
            console.log(response)
            this.vessels = response.data;
          })
          .catch((error) => {
            this.$router.push('/e429')
          })
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