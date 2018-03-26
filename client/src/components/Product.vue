<template>
  <div>
    <app-header itemsInCart=cartItems>
      <button slot="triggerModal" type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal"><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Shopping Cart  <span class="badge">{{cartItems.length}}</span></button>
      <!-- Modal -->
     <div class="modal fade" id="myModal" role="dialog" slot="modalView">
       <div class="modal-dialog">

         <!-- Modal content-->
         <div class="modal-content">
           <div class="modal-header">
             <button type="button" class="close" data-dismiss="modal">&times;</button>
             <h4 class="modal-title">Shopping Details</h4>
           </div>
           <div class="modal-body">
             <shopping-cart inline-template :items="cartItems">
               <div>
                  <table class="table table-cart">
                     <tr v-for="(item, index) in items">
                        <td>{{item.title}}</td>
                        <td style="width:120px">QTY:
                           <input v-model="item.qty" class="form-control input-qty" type="number">
                        </td>
                        <td class="text-right">${{item.price}}</td>
                        <td>
                           <button @click="removeItem(index)"><span class="glyphicon glyphicon-trash"></span></button>
                        </td>
                     </tr>
                     <tr v-show="items.length === 0">
                        <td colspan="4" class="text-center">Cart is empty</td>
                     </tr>
                     <tr v-show="items.length > 0">
                        <td></td>
                        <td class="text-right">Cart Total</td>
                        <td class="text-right">${{Total}}</td>
                        <td></td>
                     </tr>
                  </table>
               </div>
               <!-- /.container -->
            </shopping-cart>
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-success" v-show="cartItems.length > 0" @click="checkout()">Checkout</button>
             <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
           </div>
         </div>

       </div>
     </div>
    </app-header>
    <ul>
      <li  v-for="product in products">
        <div class="row">
          <!-- <div class="col-sm-6 col-md-4">-->
          <!--cart items - {{cartItems.length}}
          <ol><li v-for="cartItem in cartItems">{{cartItem}}</li></ol>-->
          <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
               <div class="thumbnail">
                   <img v-bind:src="product.imagePath" alt="..." class="img-responsive">
                   <div class="caption">
                       <h3>{{ product.title }}</h3>
                       <p class="description">{{ product.description }}</p>
                       <div class="clearfix">
                        <p class="text-center"><input v-model="product.qty" type="number" class="form-control" placeholder="Qty" min="1"></p>
                           <div class="price pull-left"><h3>${{ product.price }}</h3></div>
                           <!--<a href="#" class="btn btn-success pull-right" role="button">Add to Shopping Cart</a>-->
                           <button @click="addToCart(product)" class="btn btn-success pull-right">Add to Cart</button>
                       </div>
                   </div>
               </div>
           </div>
         </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
  created(){
    axios.get('http://139.59.35.188:3000/product')
    .then(response =>{
      console.log(response);
      this.products = response.data;
      this.$store.state.products = response.data;

    })
  },
  data(){
    return{
    products: [],
    cartItems : [],
    items: [],
    showCart: false,
    verified: false,
    cartTotal: 0
  }
},
methods:{
  addToCart(itemToAdd) {
      var found = this.cartItems.includes(itemToAdd)
      if(!found){
        this.cartItems.push(itemToAdd)
      }else{
        console.log("update qty",this.cartItems.indexOf(itemToAdd))
        let index = this.cartItems.indexOf(itemToAdd);
        this.cartItems[index].qty++
      }
    },
    checkout(){
      let data = {'cart':this.cartItems,'token':this.$store.state.token}
      console.log("token:",this.$store.state.token)

      axios.post('http://139.59.35.188:3000/order',data)
      .then(response =>{
        console.log("Order details:",JSON.stringify(response.data));
        $('#myModal').modal('hide');
        if(response.data.code == 200){
          swal({
          title: "Done!",
          text: "Product Successfully bought!",
          icon: "success",
          button: "Close"
        });
        }
        this.cartItems = []
      })
    }
},
components:{
  appHeader:Header
}
}
</script>

<style>
ul {
list-style-type: none;
}

.input-qty {
  width: 60px;
  float: right
}

.table-cart > tr > td {
  vertical-align: middle !important;
}
</style>
