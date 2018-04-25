<template>
  <div class="container">
    <h1>Please login to see the secret content</h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <b-alert show>
        <p class="error" v-if="formError">{{ formError }}</p>
        <p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>
        <div class="row">
          <div class="col-lg-2 col-md-4">Username:</div>
          <div class="col-lg-4"><b-input type="text" v-model="formUsername" name="username" /></div>
          <div class="col-lg-2 col-md-4">Password:</div>
          <div class="col-lg-4"><b-input type="password" v-model="formPassword" name="password" /></div>
        </div>
        <b-button variant="primary" type="submit">Login</b-button>
      </b-alert>
    </form>
    <b-alert show v-else>
      Hello {{ $store.state.authUser.username }}!
      <pre>I am the secret content, I am shown only when the use is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <b-button variant="primary" @click="logout">Logout</b-button>
    </b-alert>
    <p><nuxt-link to="/secret">Super secret page</nuxt-link></p>
    <p><nuxt-link to="/bs">Shoppinglist alkalmazás</nuxt-link></p>
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

<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}
</style>
