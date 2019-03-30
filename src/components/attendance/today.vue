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
          <form id="checkIn"  @submit.prevent="processForm()">
            <div class="form-group">
                <label for="exampleFormControlSelect1" class="rounded"><b>select user(s)</b></label>
                <select multiple class=" form-control" id="exampleFormControlSelect1" v-model="employee" >
                  <option v-for="response in info2.response" :value="response.id" >{{response.username}}</option>
                </select>
                <p v-if="Errors.length">
                    <ul>
                      <li v-for="error in Errors"><p class="text-danger">{{ error }}</p></li>
                    </ul>
                  </p>
              </div>
              <hr/>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#check-in" @click="checkForm()">
                submit
              </button>
             <!-- Modal -->
             <div class="modal fade" id="check-in" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="addEmployeeModalLabel">check in </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-primary" role="alert"  v-if="! Errors.length ">
                            CONFIRM !!<br/>
                          <div v-for = "employee in employee">
                           <div v-for= " data in info2.response">
                             <p v-if=" data.id == employee"> 
                                check in -- <b>{{data.username}} </b> 
                              </p>
                             </p>
                           </div>
                        </div>
                        </div>
                        <div class="alert alert-danger" role="alert"  v-if="Errors.length ">
                            please correct the following
                              <ul>
                                  <li v-for="error in Errors"><p class="text-danger">{{ error }}</p></li>
                              </ul>
                          </div>

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-primary" v-if="! Errors.length">check in </button>
                    </div>
                  </div>
                </div>
              </div>
        </form>
    
        </div>
      </div>
      <div class="collapse col-4 " id="collapseCheckOut">
        <div class="card card-body">
          <form id="checkOut"  @submit.prevent="processForm2()">
            <div class="form-group">
                <label for="exampleFormControlSelect1" class="rounded"><b>select user(s)</b></label>
                <select multiple class=" form-control" id="exampleFormControlSelect1" v-model="employee" >
                  <option v-for="response in info2.response" :value="response.id" >{{response.username}}</option>
                </select>
              </div>
              <hr/>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
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
            Errors: [],
            info2: null,
            employee: ''
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
  
            },
            checkForm: function (e) {
           
              this.Errors = []
              if (this.employee) {
                return true;
              }
              if (!this.employee) {
                this.Errors.push('employee required,add employee');
              }
         
              e.preventDefault();
            },
            processForm: function() {
              for (var data in this.employee)
                axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8000/api/check-in/',
                  data: {
  
                    user_id: this.employee[data]
                    
                    
                  }
                })
                window.location.reload()
            },
            processForm2: function() {
              for (var data in this.employee)
                axios({
                  method: 'patch',
                  url: 'http://127.0.0.1:8000/api/check-out/',
                  data: {
  
                    user_id: this.employee[data]
                    
                    
                  }
                })
                window.location.reload()
            }
        }
        }
        </script>
        
        <style>
        
        </style>