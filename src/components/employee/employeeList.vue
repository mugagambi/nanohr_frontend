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
                  <label for="Email">Email address</label>
                  <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
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