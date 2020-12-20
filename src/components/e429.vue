<template>
  <div style="text-align: center">
    <br />
    <h1 style="color:red">ERREUR 429</h1>
    <h2>Il semblerait que vous ayez navigué trop de fois!</h2>
    <br />
    <h3>Réessayez plus tard</h3>
  </div>
  <br><br>
  <button :onclick="back">Retournez d'où vous venez</button>
</template>

<script>
export default {
name: "e429",
  methods: {
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>