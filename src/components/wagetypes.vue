<template>
<div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">wage type</li>
        </ol>
      </nav>
  <div class = "row " >
    <div style="padding:10px 20px" v-for="salarytype in info.salarytype" >
    <div   class="card" style="width: 18rem;">
        <div class="card-header">
            <strong>{{salarytype.name}} </strong>
          </div>
        <div class="card-body">
         
          <p class="card-text"><p><b> commision</b> : {{salarytype.commision.commisionPercentageRate }}%</p></p>
          <hr/>
          
          <a href="#" class="card-link"><router-link :to="`/wagetypeDetail/`+ salarytype.id">users</router-link></a>

          
        
        </div>
      </div>
    </div>
    </div>
</div>
        </template>
        
        <script>
        import axios from 'axios'
        export default {
          name: 'wagetypes',
          data () {
            return {
              info : null,
              
            }
          },
          created() {
            axios.get(`http://127.0.0.1:8000/api/salary-type-list/`)
            .then(response => {
              this.info = {"salarytype": response.data }
            })
            .catch(e => {
              this.errors.push(e)
            })
          },
          
        }
        </script>
        
        <style>
        
        </style>