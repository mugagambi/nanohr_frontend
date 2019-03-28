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
                        </div>      
                      <button type="submit" class="btn btn-primary">Submit</button>
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