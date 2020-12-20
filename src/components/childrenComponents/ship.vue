<template>
<div class="shi">
  <img :src="ev.image_url" alt="" />
  <span>{{ev.name}}</span>

</div>
</template>

<script>
export default {
  props: ['sh'],
  name: "ship"
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