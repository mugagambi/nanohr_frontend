<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">attendance</a></li>
                <li class="breadcrumb-item active" aria-current="page">today</li>
        </ol>
<div style="padding:15px 5px">
    <p>
        <a class="btn btn-primary" data-toggle="collapse" href="#collapseCheckIn" role="button" aria-expanded="false" aria-controls="collapseCheckIn">
          check in
        </a>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseCheckOut" aria-expanded="false" aria-controls="collapseCheckOut">
          ckeck out
        </button>
      </p>
      <div class="row">
      <div class="collapse col-4 " id="collapseCheckIn">
        <div class="card card-body">
            <table class="table table-hover table-responsive-sm table-responsive-md ">
              <b>check in :</b>
              </td>
                <tbody>
                  <tr v-for = "response in info2.response">
                    <td><div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" :id="`CheckIn` + response.id">
                            <label class="custom-control-label" :for="`CheckIn` + response.id"></label>
                          </div></td>
                    <td>{{ response.username }}</a></td>    
            
                  </tr>
                </tbody>
              </table>
              <div class= "padding: 5px 5px">
                  <button type="button" class="btn btn-outline-primary">check in</button>  
              </div>
        </div>
      </div>
      <div class="collapse col-4 " id="collapseCheckOut">
        <div class="card card-body">
                <table class="table table-hover table-responsive-sm table-responsive-md ">
                        <b>check out :</b>
                        <tbody>
                          <tr v-for = "response in info2.response">
                            <td><div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" :id="`CheckOut` + response.id">
                                    <label class="custom-control-label" :for="`CheckOut` + response.id"></label>
                                  </div></td>
                            <td>{{ response.username }}</a></td>    
                    
                          </tr>
                        </tbody>
                      </table>
                      <div class= "padding: 5px 5px">
                          <button type="button" class="btn btn-outline-primary">check out</button>  
                      </div>
        </div>
      </div>
      </div>
</div>
</nav>
<table class="table table-hover table-responsive-sm table-responsive-md ">
    <thead class="thead-dark">
      <tr>
        <th >employee </th>
        <th >time in</th>
        <th> time out</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for = "response in info.response">
        <td>{{ response.user.username }}</a></td>
        <td > {{response.timeIn}} </td>
        <td>{{ response.timeOut}}</td>

      </tr>
    </tbody>
  </table>
</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "today",
        data() {
            return {
            info: null,
            info2: null
            }
        },

        created() {
            this.fetchData()
        },

        watch: {
            '$route': 'fetchData'
        },

        methods: {
            fetchData() {
            axios.get('http://127.0.0.1:8000/api/attendance-list/today/')
            .then(response => {
              this.info = {"response": response.data }  
            })
            .catch((err) => {
                console.log(err)
            })
            axios.get('http://127.0.0.1:8000/api/userlist/')
            .then(response => {
              this.info2 = {"response": response.data }  
            })
            .catch((err) => {
                console.log(err)
            })
  
            }
        }
        }
        </script>
        
        <style>
        
        </style>