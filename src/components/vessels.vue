<template>
  <div>
  <event
      v-for="shi in vessels"
      :sh="shi" />
  </div>
</template>



<script>

import Ship from "./childrenComponents/ship.vue";
import axios from 'axios';
export default {
  name: "vessels",
  components: {Ship},
  data() {
    return { vessels: null}
  },
  mounted()
  {
    axios
        .get('https://spacelaunchnow.me/api/3.3.0/spacecraft/?limit=30')
        .then((response) =>
        {
          this.vessels = response.data.results;
          console.log(this.vessels)
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