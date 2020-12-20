<template>
  <footer>

    <button :onclick="previousPage" :disabled="prevDisabled" id = "precedButton">Précédent</button>
    <div class="input">
      <input id="pages" name="page" type="number" min="1" :max="Math.ceil(list.count / 30)" ref="inputPage"/>
      <label id = "pageLabel" for="pages">{{ $route.query.page }}/{{ Math.ceil(list.count / 30) }}</label>
      <button :onclick="goto" id = "goButton">Go</button>
    </div>
    <button :onclick="nextPage" :disabled="nextDisabled " id = "nextButton">Suivant</button>

  </footer>


</template>

<script>
export default {
  props: ['list'], //la liste des astronautes/vaisseaux/events
  name: "paging",
  data() {
    return {
      limitStr: "http://spacelaunchnow.me/api/3.3.0/astronaut/?limit", // parce que URLSearchParams est buggé
      prevDisabled: false,
      nextDisabled: false
    }
  },
  updated() {
    this.updatePage();
  },
  watch: {
    "$route": "updatePage"
  },
  methods: {

    findPrevPage(list) {

      if (list.previous) {
        return (this.$route.query.page - 1)
      } else {
        return (this.$route.query.page)
      }

    }, findNextPage(list) {

      let next = list.next;
      let SP = new URLSearchParams(next);
      if (SP.has('offset')) {
        return (SP.get('offset') / SP.get(this.limitStr) + 1)
      } else {
        return (1)
      }

    }, nextPage() {

      this.$router.push({path: 'astronauts', query: {page: this.findNextPage(this.list)}})

    }, previousPage() {

      this.$router.push({path: 'astronauts', query: {page: this.findPrevPage(this.list)}})

    }, updatePage() {

      this.prevDisabled = !!!this.list.previous  // !(!!(this...))
      this.nextDisabled = !!!this.list.next // !!(variable) caste la variable en booléen.

    }, goto() {
      this.$router.push({path: 'astronauts', query: {page: this.$refs.inputPage.value }})
    }
  }
}
</script>

<style scoped>
.input {
  display: inline;
  margin: 1%;
}
footer {
  margin: 1% 0;
}
#precedButton
{
  background-color: rgb(50, 50, 50);
  border-radius: 0.1em;
  border: solid greenyellow 1px;
  padding: 1%;
  margin: 1%;
  color: white;
}
#nextButton
{
  background-color: rgb(50, 50, 50);
  border-radius: 0.1em;
  border: solid greenyellow 1px;
  padding: 1%;
  margin: 1%;
  color: white;
}
#goButton
{
  background-color: rgb(50, 50, 50);
  border-radius: 0.1em;
  border: solid greenyellow 1px;
  padding: 1%;
  margin: 1%;
  color: white;
}
#pageLabel
{
   background-color: rgb(50, 50, 50);
  border-radius: 0.1em;
  border: solid greenyellow 1px;
  padding: 1%;
  margin: 1%;
  color: white;
}
#pages
{
  background-color: rgb(50, 50, 50);
  border: greenyellow 1px solid;
  border-radius: 0.1em;
  color: white;
  padding: 1%;
}
</style>