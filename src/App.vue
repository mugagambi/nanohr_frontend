<template>
  <div>
      <div style="padding:55px 50px 0px  ">
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark " style=" border-radius:5px ; box-shadow: 5px 5px 5px lightgray"> 

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                  <a  class="nav-link active" href="#"><router-link :to="{ name : 'dashboard'}"><img class = "dash" src="@/assets/dashboard-2-64.png"></router-link></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link active" href="#">help</a>
              </li>              
              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  menu
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  manage
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
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        
        </nav>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
              <div class="container">
                  <div class="row">
                    <div class="col-sm">
                        <a href="#"><router-link :to="{name: 'employeeLanding'}"><img class = " icon-nav " src="@/assets/icons8-customer-64.png"></router-link></a>
                        <a href="#"><router-link :to="{name: 'employeeLanding'}"> employees</router-link></a>
                    </div>
                    <div class="col-sm">
                        <a href="#"><router-link :to="{name: 'attendanceLanding'}"><img  class = " icon-nav " src="@/assets/icons8-attendance-filled-50.png"></router-link></a>
                        <a href="#"><router-link :to="{name: 'attendanceLanding'}"> attendance</router-link></a>
                    </div>
                    <div class="col-sm">
                        <a href="#"><router-link :to="{name: 'leavesAndHolidaysLanding'}"><img class = " icon-nav " src="@/assets/icons8-beach-umbrella-100.png"></router-link></a>
                        <a href="#"><router-link :to="{name: 'leavesAndHolidaysLanding'}"> leaves</router-link> </a>
                    </div>
                    <div class="col-sm">
                        <a href="#"><router-link :to="{name: 'landing'}"><img class = " icon-nav " src="@/assets/icons8-money-bag-48.png"></router-link></a>
                        <a><router-link :to="{name: 'landing'}"> payment </router-link></a>
                    </div>
                    <div class="col-sm">
                        <a href="#"><img  class = " icon-nav " src="@/assets/icons8-collaboration-64.png"></a>
                        <a href="#"> chat </a>
                    </div>
                    <div class="col-sm">
                        <a href="#"><img class = " icon-nav " src="@/assets/icons8-internal-50.png"></a>
                        <a href="#"> recruitment </a>
                    </div>  
                  </div>
                </div>
          </div>
        </div>
      </div>

<router-view >

</router-view>
    
  
  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>
</style>
