<template>
  <div>
    <app-header></app-header>
    User Profile - {{token}}
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  data(){
    return{
      token: this.$store.state.token
    }
  },
components:{
  appHeader: Header
}
}
</script>

<style>

</style>
