<template>
  <div class="shi">
    <img :src="sh.image_url" alt=""/>
    <p>
      <span>{{ sh.name }}</span>
      <br/>
      <span class="agency">
        {{ findAgency(sh.configuration.agency.id) }}
      </span>
    </p>

  </div>
</template>

<script>
import axios from 'axios';
//findAgency(sh.configuration.agency.id)
export default {
  props: ['sh'],
  name: "ship",
  data() {
    return {
      agencies: {},
      lastRqt: ""
    }
  },
  methods: {
    findAgency(id) {
      //Ne fonctionne pas
      /*
            console.log(this.agencies)
            if (this.lastRqt !== `https://spacelaunchnow.me/api/3.3.0/agencies/${id}/`) {

              this.lastRqt = `https://spacelaunchnow.me/api/3.3.0/agencies/${id}/`
              axios.get(`https://spacelaunchnow.me/api/3.3.0/agencies/${id}/`)
                  .then((response) => {

                    console.log("oh nooooooooo")
                    this.agencies[id] = response.data.abbrev

                  })
                  .catch((error) => {

                    this.$router.push('/e429')

                  })
              return this.agencies[id]
            } else {
              console.log("heyo")
              setTimeout(this.findAgency(id),10000)
            }
          */
    }

  }
}
</script>

<style scoped>
img {
  width: 64px;
  border-radius: 100%;
}

.shi {
  background-color: rgb(50, 50, 50);
  color: white;
  min-width: 20%;
  flex: 1;
  margin: 1% 1%;
  padding: 1%;
  border: solid black 1px;
}

.shi:hover {
  background: #CCC;
}

.shi p {
  text-align: left;
  margin: auto 5%;
}

span.agency {
  color: greenyellow;
  background-color: rgb(30, 30, 30);
  padding: 2%;
  border-radius: 0.5em;
}
</style>