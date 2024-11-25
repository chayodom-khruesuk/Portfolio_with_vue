<template>
    <v-app-bar app color="#111111" dark flat class="px-10" :height="$route.name === 'home' ? 100:70 ">
      <v-btn icon class="mx-12">
          <v-icon color="#A7121D" size="30px">rocket_launch</v-icon>
      </v-btn>
      <v-btn text :to="{name: 'home'}" class="text-capitalize mx-2" :class="{ 'active-text': $route.name === 'home' }">home</v-btn>
      <v-btn text :to="{name: 'about'}" class="text-capitalize mx-2" :class="{ 'active-text': $route.name === 'about' }">about</v-btn>
      <v-btn text :to="{name: 'portfolio'}" class="text-capitalize mx-2" :class="{ 'active-text': $route.name === 'portfolio' }">portfolio</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon href="https://www.facebook.com/ChayodomKhrueasuk/" variant="plain">
        <v-icon>fab fa-facebook</v-icon>
      </v-btn>
      <v-btn icon href="https://www.instagram.com/chayo_kx/" variant="plain">
        <v-icon>fab fa-instagram</v-icon>
      </v-btn>
      <v-btn icon href="https://github.com/chayodom-khruesuk" variant="plain">
        <v-icon>fab  fa-github</v-icon>
      </v-btn>
      <v-btn icon href="https://www.linkedin.com/in/chayodom-khruesuk-84b2b6205/" variant="plain">
        <v-icon>fab fa-linkedin</v-icon>
      </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods: {
      scroll(RouteName) {
        const  element = document.getElementById(RouteName);
        element.scrollIntoView({behavior: "smooth"});
      }
    }
  }
  </script>
  
  <style>
    .text-capitalize {
      text-transform: capitalize !important;
    }

    .active-text {
      color: #A7121D !important;
    }
  </style>