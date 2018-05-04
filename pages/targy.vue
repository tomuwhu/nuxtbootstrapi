<template>
  <div>
    <div class="row">
      <div class="col">
      </div>
      <div class="col">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="exampleInputGroup1"
                          label="Email address:"
                          label-for="exampleInput1"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="exampleInput1"
                            type="email"
                            v-model="form.email"
                            required
                            placeholder="Enter email">
              </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label="Your Name:"
                          label-for="exampleInput2">
              <b-form-input id="exampleInput2"
                            type="text"
                            v-model="form.name"
                            required
                            placeholder="Enter name">
              </b-form-input>
            </b-form-group>
            <b-form-group id="spg"
                          label="Választott sportág:"
                          label-for="spl">
              <b-form-select id="spl"
                            :options="sports"
                            multiple
                            required
                            v-model="form.sport">
              </b-form-select>
            </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        sport: null
      },
      sports: [
        { text: 'Asztalitenisz', value: 'pingpong' },
        { text: 'Sakk', value: 'sakk' },
        { text: 'Tenisz', value: 'tenisz' }
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      //alert(JSON.stringify(this.form))
      this.$store.dispatch('newreg', { form: this.form } )
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.name = ''
      this.form.sport = null
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>
