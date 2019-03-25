<template>
    <div class = "employeeLanding">
            <div style="padding:10px 0px" class="container">
                    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                    <div class="row">
                      <div  style="padding:25px 50px " class="col-12 col-sm-10 col-md-8 col-lg-4" >
                          <div class="list-group">
                              
                              <a href="#" class="list-group-item list-group-item-action disabled bg-dark text-light" ><strong>menu</strong></a>
                              <router-link :to="{ name: 'employeeList' }"><a href="#" class="list-group-item list-group-item-action "> all employees</a></router-link>
                              <router-link :to="{ name: 'departmentList' }"><a href="#" class="list-group-item list-group-item-action"> departments</a></router-link>
                           </div>

                      </div>
                      <div class="col-12 col-sm-10 col-md-8 col-lg-8 " style="padding:25px 0px 0px 5px">
                          <router-view class="border border-light">
                          <div id="list-content">
                           
                          </div>
                          </router-view>
                      </div>
                    </div>
          
                    <div class="row">
                    </div>
                </div>
            </div>
            
    </div>
    </template>
    
    <script>
    export default {
      name: 'employeeLanding',
      data () {
        return {
          info: null
        }
      }
    
    }
    </script>
    
    <style>
    
    </style>