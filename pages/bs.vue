<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col-lg-4 col-md-6 text-center">
        <b-alert show>Shopping-list alkalmazás</b-alert>
        <b-input v-model="mit"></b-input>
        <br>
        <b-button @click="proba">Felvesz</b-button>
        <hr>
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
      mit: "",
      list: []
    }
  },
  methods: {
    async proba() {
      try {
          await this.$store.dispatch('proba', {mit: this.mit})
          this.mit=''
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
