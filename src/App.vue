<template>
  <header>
    <Navbar/>
  </header>
    <p> wesh le sang de la veine </p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    link() {
      console.log(this.$route);
    }
  }
}

//if (route == "debug"){ debug = true}
//if (route == "evenements"){ events = true}

</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}
</style>
