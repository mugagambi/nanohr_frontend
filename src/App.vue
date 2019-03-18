<template>
  <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Nanocomputing</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">manage users</a>
                  <a class="dropdown-item" href="#">manage rates</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">manage wages additions</a>
                  <a class="dropdown-item" href="#">manage wages additions</a>
                  
                </div>
              </li>
            </ul>
          </div>
      </nav>
      <div style="padding:50px 0px" class="container">
          <!-- Stack the columns on mobile by making one full-width and the other half-width -->
          <div class="row">
            <div  style="padding:25px 50px " class="col-12 col-sm-10 col-md-8 col-lg-4" >
                <div class="list-group">
                    
                    <a href="#" class="list-group-item list-group-item-action disabled bg-dark text-light" ><strong>menu</strong></a>
                    <a href="#" class="list-group-item list-group-item-action "><img src="@/assets/user-info-icon.png"><router-link :to="{ name: 'accounts' }"> accounts</router-link></a>
                    <a href="#" class="list-group-item list-group-item-action"><img src="@/assets/Action-db-remove-icon.png"><router-link :to="{ name: 'deductions' }"> deductions</router-link></a>
                    <a href="#" class="list-group-item list-group-item-action"><img src="@/assets/coin-add-icon.png"><router-link :to="{name: 'additions'}"> alowances</router-link></a>
                    <a href="#" class="list-group-item list-group-item-action"><img src="@/assets/check-user-icon.png"><router-link :to="{name: 'summary'}"> drafts this month</router-link></a>
                </div>
                <div style="padding:25px 0px " class="list-group">
                    <a href="#" class="list-group-item list-group-item-action "><img src="@/assets/Cash-icon.png"><router-link :to="{ name: 'wagetypes' }"> wage types</router-link></a>
                    <a href="#" class="list-group-item list-group-item-action"> governament rates</a>
                </div>
            </div>
            <div class="col-12 col-sm-10 col-md-8 col-lg-8 " style="padding:25px 50px">
                <router-view class="border border-light">
                <div id="list-content">
                 
                </div>
                </router-view>
            </div>
          </div>

          <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
          <div class="row">
          </div>
      </div>
  </div>
  
  </div>
  
</template>

<script>
import accounts from './components/accounts.vue'
export default {
  name: 'App',
  components: {
    accounts
  }
}
</script>

<style>
</style>
