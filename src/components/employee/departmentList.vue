<template>
<div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">departments</li>
        </ol>
      </nav>
      <div style="padding:15px 5px">
          <p>
              <a class="btn btn-primary" data-toggle="collapse" href="#addDepartment" role="button" aria-expanded="false" aria-controls="addDepartment">
                + add department
              </a>
      
            </p>
            <div class="row">
            <div class="collapse " id="addDepartment">
              <div class="card card-body">
                  <form id="addDepartment" @submit.prevent = "processForm()">
                      <div class="form-group">
                          <label for="departmentName">Name of department</label>
                          <input type="text" class="form-control" id="departmentName" placeholder="Enter department name" v-model="departmentName">
                          <p v-if="Errors.length">
                              <ul>
                                <li v-for="error in Errors"><p class="text-danger">{{ error }}</p></li>
                              </ul>
                            </p>
                        </div>      
                        
                <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addDepartmentModal" @click="checkForm()">
                    submit
                  </button>
  
                <!-- Modal -->
                <div class="modal fade" id="addDepartmentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="addEmployeeModalLabel">add department</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                            <div class="alert alert-primary" role="alert"  v-if="! Errors.length">
                                CONFIRM !!<br/>
                                add <b>{{departmentName}}</b> to the list of departments</b>
                            </div>
                            <div class="alert alert-danger" role="alert"  v-if="Errors.length">
                              please correct the following
                                <ul>
                                    <li v-for="error in Errors"><p class="text-danger">{{ error }}</p></li>
                                </ul>

                            </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" class="btn btn-primary" v-if="! Errors.length">add department</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
      
            </div>
            </div>
  <div class = "row" >
    <div style="padding:10px 20px" v-for="data in info.response" >
    <div   class="card" style="width: 18rem;">
        <div class="card-header">
            <strong> department {{data.id}} </strong>
          </div>
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p class="card-text">{{data.departmentName}}</p><hr/>
          <a href="#" class="card-link"><router-link :to="`/departmentDetail/`+ data.id">employees</router-link></a>
 
        
        </div>
      </div>
    </div>
    </div>
</div>
</template>
      <script>
          import axios from 'axios'
          export default {
              name: "departmentList",
          data() {
              return {
              info: null,
              Errors: [],
              departmentName: ''
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
              axios.get('http://127.0.0.1:8000/api/department-list/')
              .then(response => {
                this.info = {"response": response.data }  
              })
              .catch((err) => {
                  console.log(err)
              })
              },
              checkForm: function (e) {
           
                this.Errors = []
                if (this.departmentName) {
                  return true;
                }

                if (!this.departmentName) {
                  this.Errors.push('department name  required');
                  document.addEmployee.username.focus();
                }

                e.preventDefault();
              },
              processForm: function() {
              
                axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8000/api/department-list/',
                  data: {
  
                    departmentName: this.departmentName
                    
                    
                  }
                })
                window.location.reload()
                
               
              }
          }
          }
          </script>
        
        <style>
        
        </style>