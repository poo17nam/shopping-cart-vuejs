<template>
  <div>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!--<a class="navbar-brand" href="#">Brand</a>-->
            <router-link to="/product" tag="a"><a class="navbar-brand">ShopHop</a></router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">
                   <!--<button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal"><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Shopping Cart  <span class="badge"></span></button>-->
                   <slot name="triggerModal"></slot>
                   <slot name="modalView"></slot>
                </a></li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i> User Management <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <!--<li><a href="#">User Account</a></li>-->
                        <!--<li><router-link to="/profile">User Account</router-link></li>-->
                        <!--<li role="separator" class="divider"></li>-->
                        <!--<li><a href="#" @click="logout">Logout</a></li>-->
                        <li><router-link to="/">Logout</router-link></li>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

</div>
</template>

<script>
export default {
  props:['itemsInCart'],
  methods:{
    logout(){
      console.log("user log out");
    }
  }
}
</script>

<style>

</style>
