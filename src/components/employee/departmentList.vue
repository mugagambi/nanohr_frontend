<template>
<div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">departments</li>
        </ol>
      </nav>
  <div class = "row" >
    <div style="padding:10px 20px" v-for="data in info.response" >
    <div   class="card" style="width: 18rem;">
        <div class="card-header">
            <strong> {{data.departmentName}} </strong>
          </div>
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p class="card-text">description</p><hr/>
          <button type="button" class="btn btn-outline-primary card-link" data-toggle="modal" :data-target="uoou">
              + add employee
            </button>
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
          name: 'departmentList',
          data () {
            return {
              info : null

            }
          
          },
          methods: {
          },
          created() {
            axios.get(`http://127.0.0.1:8000/api/department-list/`)
            .then(response => {
            this.info = {"response": response.data }
            })
            .catch(e => {
            this.errors.push(e)
            })
          },
          
        }
        </script>
        
        <style>
        
        </style>