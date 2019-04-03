<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item " aria-current="page"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#"><router-link :to="{name: 'departmentList'}">departments</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page" v-for ="data in context.context">{{data.departmentName}}</li>
        </ol>
    </nav>

<div style="padding:15px 5px">
    <p>
        <a class="btn btn-primary" data-toggle="collapse" href="#selectUsers" role="button" aria-expanded="false" aria-controls="selectUsers">
          add employee 
        </a>

      </p>
      <div class="row">
      <div class="collapse col-4" id="selectUsers">
        <div class="card card-body">
            <form id="addDeductionForm" v-for="data in context.context" @submit.prevent="processForm(data.id)">
            <div class="form-group">
                <label for="exampleFormControlSelect1" class="rounded"><b>select user(s)</b></label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="employee" >
                  <option v-for="response in info2.response" :value="response.id" >{{response.username}}</option>
                </select>
                <p v-if="employeeErrors.length">
                    <ul>
                      <small><li v-for="error in employeeErrors"><p class="text-danger">{{ error }}</p></li></small>
                    </ul>
                  </p>
              </div>
              <div class="form-group">
                  <label for="departmentName">designation</label>
                  <input type="text" class="form-control" id="designation" placeholder="Enter designation" v-model="designation">
                  <p v-if="Errors.length">
                      <ul>
                        <small><li v-for="error in Errors"><p class="text-danger">{{ error }}</p></li></small>
                      </ul>
                    </p>
                </div> 
              <hr/>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addDepartmentModal" @click="checkForm()">
                    submit
                  </button>
  
                <!-- Modal -->
                <div class="modal fade" id="addDepartmentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="addEmployeeModalLabel">add employee to department</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                            <div class="alert alert-primary" role="alert"  v-if="! Errors.length && ! employeeErrors.length">
                                CONFIRM !!<br/>
                               <div v-for= " data in info2.response">
                                 <p v-if=" data.id == employee"> 
                                    add -- <b>{{data.username}} </b> 
                                  </p>
                                 </p>
                               </div>
                               <div v-for ="data in context.context" >
                                 to --
                                  <b>{{data.departmentName}}</b> department 
                                  as -- <b>{{designation}}</b>
                               </div>
                            </div>
                            <div class="alert alert-danger" role="alert"  v-if="Errors.length || employeeErrors.length">
                              please correct the following
                                <ul>
                                    <li v-for="error in Errors"><p class="text-danger">{{ error }}</p></li>
                                </ul>
                                <ul>
                                    <li v-for="error in employeeErrors"><p class="text-danger">{{ error }}</p></li>
                                </ul>

                            </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" class="btn btn-primary" v-if="! Errors.length && ! employeeErrors.length">add epmloyee to department</button>
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
        <th >designation</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for = "response in info.response">
        <td>{{ response.user.username }}</a></td>
        <td > {{response.designation}} </td>

      </tr>
    </tbody>
  </table>
</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "departmentDetail",
        data() {
            return {
            context: null,
            employeeErrors: [],
            Errors: [],
            info: null,
            info2: null,
            employee: '',
            designation: ''
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
            axios.get('http://127.0.0.1:8000/api/employees-in-department/'+this.$route.params.id+'/')
            .then(response => {
              this.info = {"response": response.data }  
            })
            .catch((err) => {
                console.log(err)
            })
            axios.get('http://127.0.0.1:8000/api/department/'+this.$route.params.id+'/')
            .then(response => {
              this.context= {"context": response.data }  
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
              this.employeeErrors = []
              if (this.designation && this.employee) {
                return true;
              }
              if (!this.employee) {
                this.employeeErrors.push('employee required,add employee');
              }

              if (!this.designation) {
                this.Errors.push('designation  required');
              }

              e.preventDefault();
            },
            processForm: function(id) {
              axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/addUserToDepartment/',
                data: {
                  user_id: this.employee,
                  department_id: id,
                  designation: this.designation 
                }
              })
              window.location.reload()
              
            }
        }
        }
        </script>
        
        <style>
        
        </style>