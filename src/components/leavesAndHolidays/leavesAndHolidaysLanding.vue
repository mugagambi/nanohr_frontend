<template>
    <div class = "leavesAndHolidaysLanding">
            <div style="padding:10px 0px" class="container">
                    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                    <div class="row">
                      <div  style="padding:25px 50px " class="col-12 col-sm-10 col-md-8 col-lg-4" >
                          <div class="list-group">
                              
                              <a href="#" class="list-group-item list-group-item-action disabled bg-dark text-light border-0" ><strong>menu</strong></a>
                              <router-link :to="{ name: 'applications' }"><a href="#" class="list-group-item list-group-item-action border-0"> applications </a></router-link>
                              <router-link :to="{ name: 'onService' }"><a href="#" class="list-group-item list-group-item-action border-0"> approved </a></router-link>
                              <router-link :to="{name: 'types'}"><a href="#" class="list-group-item list-group-item-action border-0"> types</a></router-link>
                          </div>

                      </div>
                      <div class="col-12 col-sm-10 col-md-8 col-lg-8 " style="padding:25px 0px 0px 5px">
                          <router-view class="border border-light shadow-sm p-3 mb-5 bg-white rounded">
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
      name: 'leavesAndHolidaysLanding',
      data () {
        return {
          info: null
        }
      }
    
    }
    </script>
    
    <style>
    
    </style>