<template>
  <div id="app">
    <div class="container">
  <router-view></router-view>
  <!--<app-login></app-login>-->
  <!--<app-header></app-header>
  <app-product></app-product>-->

  </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Product from './components/Product'
import Login from './components/Login'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appHeader : Header,
    appProduct : Product,
    appLogin : Login
  }
}
</script>

<style>

</style>
