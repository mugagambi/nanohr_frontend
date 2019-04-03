<template>
<div>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">employees</li>
    </ol>
  </nav>
  <div style="padding:15px 5px">
    <p>
        <a class="btn btn-primary" data-toggle="collapse" href="#addEmployee" role="button" aria-expanded="false" aria-controls="addEmployee">
          add employee(s)
        </a>

      </p>
      <div class="row">
      <div class="collapse " id="addEmployee">
        <div class="card card-body">
            <form id="addEmployee" @submit.prevent = "processForm()">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter username" v-model="username">
                  </div>

                <div class="form-group">
                    <p v-if="usernameErrors.length">
                        <ul>
                          <small><li v-for="error in usernameErrors"><p class="text-danger">{{ error }}</p></li></small>
                        </ul>
                      </p>
                  <label for="Email">Email address</label>
                  <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                  <p v-if="emailErrors.length">
                      <ul>
                        <small><li v-for="error in emailErrors"><p class="text-danger">{{ error }}</p></li></small>
                      </ul>
                    </p>
                </div>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addEmployeeModal" @click="checkForm()">
                  submit
                </button>

                <!-- Modal -->
                <div class="modal fade" id="addEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="addEmployeeModalLabel">add employee</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                          <div class="alert alert-primary" role="alert"  v-if="! usernameErrors.length && ! emailErrors.length">
                              CONFIRM !!<br/>
                              add employee with username -- <b>{{username}}</b> and email --<b>{{email}}</b>
                          </div>
                          <div class="alert alert-danger" role="alert"  v-if="usernameErrors.length || emailErrors.length">
                            please correct the following
                              <ul>
                                  <li v-for="error in usernameErrors"><p class="text-danger">{{ error }}</p></li>
                              </ul>
                              <ul>
                                  <li v-for="error in emailErrors"><p class="text-danger">{{ error }}</p></li>
                              </ul>
                          </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" v-if="! usernameErrors.length && ! emailErrors.length ">add employee</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
        </div>
      </div>

      </div>
</div>
<table class="table table-hover table-responsive-sm table-responsive-md ">
    <thead class="thead-dark">
      <tr>
        <th >employee </th>
        <th >email</th>
        <th></th>

      </tr>
    </thead>
    <tbody>
      <tr v-for = "response in info.response">
        <td>{{ response.username }}</a></td>
        <td > {{response.email}} </td>
        <td><button type="button" class="btn btn-outline-link" >
          <router-link :to="`/employeeDetail/` + response.id + `/`"><img src="@/assets/Data-View-Details-icon.png"></router-link>
          </button></td>
        
      </tr>
    </tbody>
  </table>
</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "employeeList",
        data() {
            return {
            info: null,
            usernameErrors:[],
            emailErrors: [],
            username: '', 
            email: ''
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
            axios.get('http://127.0.0.1:8000/api/userlist/')
            .then(response => {
              this.info = {"response": response.data }  
            })
            .catch((err) => {
                console.log(err)
            })
  
            },
            checkForm: function (e) {
              this.usernameErrors = []
              this.emailErrors = []
              if (this.username && this.email) {
                return true;
              }

              if (!this.username) {
                this.usernameErrors.push('username required');
                document.addEmployee.username.focus();
              }
              if (this.username.split(' ').length > 1){
                this.usernameErrors.push(' username can only be one word')
                document.addEmployee.username.focus();
              }
              if (!this.email) {
                this.emailErrors.push('email required');
                document.addEmployee.Email.focus();
              }
              e.preventDefault();
            },
            processForm: function() {
              axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/userlist/',
                data: {

                  username: this.username,
                  email: this.email
                  
                  
                }
              })
              window.location.reload()
            }
        }
        }
        </script>
        
        <style>
        
        </style>