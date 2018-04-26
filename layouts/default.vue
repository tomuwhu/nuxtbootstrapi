<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
     <b-navbar-nav>
       <b-nav-item href="/">Kezdőlap</b-nav-item>
       <b-nav-item v-if="$store.state.authUser" href="/bs">Shopping list</b-nav-item>
     </b-navbar-nav>
    </b-navbar>
    <nuxt/>
  </div>
</template>
