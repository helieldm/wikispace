<template>
  <header>
    <Navbar/>
  </header>

  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
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
  width: 100%;
  background-color: #222;
  padding: 15px;
}
</style>
