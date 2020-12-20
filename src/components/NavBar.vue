<template>
  <nav>
    <div class="menu-item"><router-link to="/astronauts?page=1">Astronautes</router-link></div>
    <div class="menu-item"><router-link to="/">Vaisseaux</router-link></div>
    <div class="menu-item"><router-link to="/events">Evènements</router-link></div>
    <div class="menu-item"><router-link to="/debug">debug</router-link></div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
nav {
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>