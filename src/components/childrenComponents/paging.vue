<template>

  <button :onclick="previousPage" :disabled="prevDisabled">Précédent</button>
  <input id="pages" name="page" type="number" minlength="1" maxlength="" />
  <label for="pages">{{$route.query.page}}/{{list.count/30}}</label>
  <button :onclick="nextPage" :disabled="nextDisabled">Suivant</button>

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

    }
  }
}
</script>

<style scoped>

</style>