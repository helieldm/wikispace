<template>
<div class="astro">
  <img :src="ast.profile_image_thumbnail" alt="" />
  <span>{{ast.name}}</span>

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
  min-width: 20%;
  flex: 1;
  margin: 1%  0 ;
}
</style>