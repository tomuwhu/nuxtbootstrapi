<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col-lg-4 col-md-6 text-center">
        <br>
        <b-alert show><h3>Shopping-list alkalmazás</h3>
        <b-input v-model="mit" @keyup.native.enter="felvesz()"></b-input><hr>
        <b-button @click="felvesz">Felvesz</b-button>
        </b-alert>
        <b-alert show variant="success">
          <div v-for="elem in szurtlist" class="row" style="border-bottom:solid 1px #a0d2a3;">
            <div class="col text-left">{{elem.name}}</div>
            <div class="col text-right"><b style='color:red; cursor:pointer;'
               @click="torol(elem._id)" v-b-popover.hover="elem.name+', nem vonható vissza!'" title='töröl'>x</b></div>
          </div>
        </b-alert>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
    return {
      mit: ""
    }
  },
  methods: {
    felvesz() {
        if (this.szurtlist.length==0) {
          this.$store.dispatch('bekuld', {mit: this.mit})
          this.mit=''
        }
    },
    torol(e) {
        this.$store.dispatch('torol', {mit: e})
    }
  },
  computed: {
    szurtlist() {
      if (this.mit.length<1) return this.$store.state.list.slice(0,10)
      else {
        let t = this
                .$store.state.list
                .filter(v => new RegExp(this.mit,'i').test(v.name))
            t   .sort( (a,b) => a.name.localeCompare(b.name) )
        return t.slice(0,10)
      }
    }
  }
}
</script>
