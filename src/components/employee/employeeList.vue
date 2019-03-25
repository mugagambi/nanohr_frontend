<template>
<div>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">employees</li>
    </ol>
  </nav>
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
            info: null
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
  
            }
        }
        }
        </script>
        
        <style>
        
        </style>