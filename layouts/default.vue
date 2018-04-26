<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
     <b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="/"
                      :active="$route.name=='index'">Kezdőlap</b-nav-item>
          <b-nav-item href="/bs"
                      :disabled="!$store.state.authUser"
                      :active="$route.name=='bs'">Shopping-list</b-nav-item>
        </b-navbar-nav>
     </b-navbar-nav>
    </b-navbar>
    <nuxt/>
  </div>
</template>
