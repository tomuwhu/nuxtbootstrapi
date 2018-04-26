<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col-lg-4 col-md-6 text-center">
        <b-alert show><h3>Shopping-list alkalmazás</h3>
        <b-input v-model="mit" @keyup.native.enter="felvesz"></b-input><hr>
        <b-button @click="felvesz">Felvesz</b-button>
        </b-alert>
        <div v-for="elem in szurtlist">
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
        if (this.szurtlist.length==0) {
          this.$store.dispatch('bekuld', {mit: this.mit})
          this.mit=''
        } else console.log(this.szurtlist)
      } catch (e) {
          this.formError = e.message
      }
    }
  },
  computed: {
    szurtlist() {
      if (this.mit.length<1) return this.$store.state.list.slice(0,10)
      else {
        let t = this
                .$store.state.list
                .filter(v => new RegExp(this.mit,'i').test(v))
            t   .sort( (a,b) => a.localeCompare(b) )
        return t.slice(0,10)
      }
    }
  }
}
</script>
