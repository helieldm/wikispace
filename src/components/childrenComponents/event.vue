<template>
<div class="eve">
  <span>{{ev.name}}</span>

</div>
</template>

<script>
export default {
  props: ['ev'],
  name: "event"
}
</script>

<style scoped>
img{
  width: 64px;
  border-radius: 100%;
}
.eve{
  background-color: rgb(50, 50, 50);
  color:white;
  min-width: 20%;
  flex: 1;
  margin: 1%  1%;
  padding: 1%;
  border: solid black 1px;
}
.eve:hover{
  background: #CCC;
}
.eve p{
  text-align: left;
  margin: auto 5%;
}
</style>