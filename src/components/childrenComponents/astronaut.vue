<template>
<div class="astro">
  <img :src="ast.profile_image_thumbnail" :alt="'image of ' + ast.name" />
  <p>
    <span class="name">
      {{ast.name}}
    </span>
    <br />
    <span class="agency">
      {{ ast.agency === null ? null : ast.agency.abbrev}}
    </span>
  </p>

</div>
</template>

<script>
export default {
  props: ['ast'],
  name: "astronaut"
}
</script>

<style scoped>
img{
  width: 64px;
  border-radius: 100%;
}
.astro{
  background-color: rgb(50, 50, 50);
  color:white;
  min-width: 20%;
  flex: 1;
  margin: 1%  1%;
  padding: 1%;
  border: solid black 1px;
}
.astro:hover{
  background: #CCC;
}
.astro p{
  text-align: left;
  margin: auto 5%;
}
span.agency
{
  color:greenyellow;
}
</style>