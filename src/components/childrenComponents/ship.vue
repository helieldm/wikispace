<template>
<div class="shi">
  <img :src="sh.image_url" alt="" />
  <span>{{sh.name}}</span>

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
.shi{
  background-color: rgb(50, 50, 50);
  color:white;
  min-width: 20%;
  flex: 1;
  margin: 1%  1%;
  padding: 1%;
  border: solid black 1px;
}
.shi:hover{
  background: #CCC;
}
.shi p{
  text-align: left;
  margin: auto 5%;
}
</style>