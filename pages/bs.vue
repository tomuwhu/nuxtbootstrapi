<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col-lg-4 col-md-6 text-center">
        <b-alert show><h3>Shopping-list alkalmazás</h3>
        <b-input v-model="mit" @change="felvesz()"></b-input><hr>
        <b-button @click="felvesz">Felvesz</b-button>
        </b-alert>
        <div v-for="elem in $store.state.list">
          {{elem}}
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data () {
    return {
      mit: ""
    }
  },
  methods: {
    felvesz() {
      try {
          this.$store.dispatch('bekuld', {mit: this.mit})
          this.mit=''
      } catch (e) {
          this.formError = e.message
      }
    }
  }
}
</script>
