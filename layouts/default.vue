<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
     <b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item to="/"
                      :active="$route.name=='index'"
                      exact
                      :disabled="$route.name=='index'">Kezdőlap</b-nav-item>
          <b-nav-item to="/bs"
                      :active="$route.name=='bs'"
                      exact
                      :disabled="$route.name=='bs' || !$store.state.authUser">Shopping-list</b-nav-item>
          <b-nav-item to="/targy"
                      :active="$route.name=='targy'"
                      exact
                      :disabled="$route.name=='targy' || !$store.state.authUser">Mi legyen</b-nav-item>            
        </b-navbar-nav>
     </b-navbar-nav>
    </b-navbar>
    <nuxt/>
  </div>
</template>
