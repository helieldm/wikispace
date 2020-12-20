<template>
  <div>
  <event
      v-for="eve in events"
      :ev="eve" />
  </div>
</template>



<script>

import Event from "./childrenComponents/event.vue";
import axios from 'axios';
export default {
  name: "events",
  components: {Event},
  data() {
    return { events: null}
  },
  mounted()
  {
    axios
        .get('https://spacelaunchnow.me/api/3.3.0/event/?limit=30')
        .then((response) =>
        {
          this.events = response.data.results;
          console.log(this.events)
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