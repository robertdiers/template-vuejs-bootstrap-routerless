<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#" @click="swapComponent('ExampleClick')">ExampleClick</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#" @click="changeLanguage('en')">EN</b-dropdown-item>
            <b-dropdown-item href="#" @click="changeLanguage('de')">DE</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>     

  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import ExampleClick from './components/ExampleClick.vue'

export default {
  name: 'app',
  data() {
    return {
      currentComponent: 'HelloWorld'
    }
  },
  components: {
    HelloWorld,
    ExampleClick
  },
  methods: {
    swapComponent: function(component)
    {
      //store transferdata
      this.$session.set('transferdata', { data1: 'hallo1', data2: 'hallo2'})

      //switch component
      this.currentComponent = component;
    },
    changeLanguage: function(lang)
    {
      //change language using main.js method call to access i18n
      window.App.changeLocale(lang);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
