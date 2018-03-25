<template>
  <div>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <!--  {{#if hasErrors}}
            <div class="alert alert-danger">
                {{# each messages }}
                    <p>{{this}}</p>
                {{/each}}
            </div>
        {{/if}}-->
        <div v-if="result.code!=undefined && result.code != 200">
        <div class="alert alert-danger">
                <p>{{result.message}}</p>
        </div>
      </div>
        <form method="post" v-if="!isSubmitted">
          <h1>Sign In</h1>
            <div class="form-group">
                <label for="email">E-Mail</label>
                <input type="text" id="email" name="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="submitted">Sign In</button>
        </form>

    </div>

</div>
<!--<div v-if="isSubmitted">
    <div v-if="result.code==200">

          <app-product></app-product>
    </div>
<div v-else>In v-else</div>
</div>-->
</div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
import Product from './Product.vue'
export default {
created(){

},
data(){
  return{
  result: {},
  email : '',
  password:'',
  isSubmitted:false
}
},
      methods : {
        submitted() {

          axios.post('http://localhost:3000/login',{email:this.email,password:this.password})
          .then(response =>{
            console.log(JSON.stringify(response));
            this.result = response.data;
            if(response.data.code == 200){
              this.isSubmitted = true
              this.$store.state.token = response.data.token;
              this.$router.push('/product')
            }
          })
        },
        navigateToProduct(){
          this.$router.push('/product')
        }
      },
      components:{
        appHeader : Header,
        appProduct : Product
      }
}
</script>

<style>

</style>
