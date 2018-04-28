<template>
  <div class="text-center">
    <br>
    <h4>
      [<a target="_blank" href="https://nuxtjs.org/">NuxtJS</a> -
      <a target="_blank" href="https://expressjs.com/">ExpressJS</a> -
      <a target="_blank" href="https://vuejs.org/v2/guide/">Vue.js</a> -
      <a target="_blank" href="https://vuex.vuejs.org/en/intro.html">Vuex</a> -
      <a target="_blank" href="https://bootstrap-vue.js.org/">Bootstrap</a> -
      <a target="_blank" href="http://mongoosejs.com/">Mongoose</a>]
       mintaalkalmazás
    </h4>
    <br>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <b-alert show variant="danger" v-if="formError">{{ formError }}</b-alert>
      <b-alert show>
        <p><i>Bejelentkezhet <b>demo</b> felhasználónévvel és <b>demo</b> jelszóval.</i></p>
        <b-input type="text"
                 autocomplete="username"
                 placeholder="felhasználónév"
                 v-model="formUsername"
                 name="username"
                 style="width:260px; margin:0 auto;"/>
        <b-input type="password"
                 autocomplete="current-password"
                 placeholder="jelszó"
                 v-model="formPassword"
                 name="password"
                 style="width:260px; margin:0 auto;"/>
        <hr>
        <b-button variant="primary" type="submit">Bejelentkezés</b-button>
      </b-alert>
    </form>
    <b-alert show v-else class="text-center">
      <p><nuxt-link to="/bs">Shoppinglist alkalmazás</nuxt-link></p>
      <b-button variant="primary" @click="logout">Kijelentkezés</b-button>
    </b-alert>
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <a href="http://www.inf.u-szeged.hu/~tnemeth"
            target="_blank"><b-img right thumbnail fluid src='/me.jpg' /></a>
        </b-col>
        <b-col class="text-left">
          <qrcode-vue :value="qrcode_value"
                      :foreground="'#058'"
                      :size="170"></qrcode-vue>
        </b-col>
      </b-row>
    </b-container>
    </div>

  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  data() {
    return {
      qrcode_value: 'http://www.inf.u-szeged.hu/~tnemeth',
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  components: {
    QrcodeVue
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
