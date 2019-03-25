<template>
<div class = "landing">
        <div style="padding:10px 0px" class="container">
                <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                <div class="row">
                  <div  style="padding:25px 50px " class="col-12 col-sm-10 col-md-8 col-lg-4" >
                      <div class="list-group">
                          
                          <a href="#" class="list-group-item list-group-item-action disabled bg-dark text-light" ><strong>menu</strong></a>
                          <router-link :to="{ name: 'accounts' }"><a href="#" class="list-group-item list-group-item-action "><img src="@/assets/user-info-icon.png"> accounts</a></router-link>
                          <router-link :to="{ name: 'deductions' }"><a href="#" class="list-group-item list-group-item-action"><img src="@/assets/Action-db-remove-icon.png"> deductions</a></router-link>
                          <router-link :to="{name: 'additions'}"><a href="#" class="list-group-item list-group-item-action"><img src="@/assets/coin-add-icon.png"> alowances</a></router-link>
                          <router-link :to="{name: 'summary'}"><a href="#" class="list-group-item list-group-item-action"><img src="@/assets/check-user-icon.png"> drafts this month</a></router-link>
                      </div>
                      <div style="padding:25px 0px " class="list-group">
                        <router-link :to="{ name: 'wagetypes' }"><a href="#" class="list-group-item list-group-item-action "><img src="@/assets/Cash-icon.png"> wage types</a></router-link>
                          <a href="#" class="list-group-item list-group-item-action"> governament rates</a>
                      </div>
                  </div>
                  <div class="col-12 col-sm-10 col-md-8 col-lg-8 " style="padding:25px 0px 0px 5px">
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
export default {
  name: 'landing',
  data () {
    return {
      info: null
    }
  }

}
</script>

<style>

</style>