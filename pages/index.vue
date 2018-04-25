<template>
  <div class="text-center">
    <br><br>
    <h2>NuxtJS - Express - Mongoose mintaalkalmazás</h2>
    <br>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <b-alert show variant="danger" v-if="formError">{{ formError }}</b-alert>
      <b-alert show>
        <p><i>Bejelentkezhet <b>demo</b> felhasználónévvel és <b>demo</b> jelszóval.</i></p>
        <b-input type="text"
                 placeholder="felhasználónév"
                 v-model="formUsername"
                 name="username"
                 style="width:260px; margin:0 auto;"/>
        <b-input type="password"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
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
