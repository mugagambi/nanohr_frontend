<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item " aria-current="page"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#"><router-link :to="{name: 'departmentList'}">departments</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page" v-for ="data in context.context">{{data.departmentName}}</li>
        </ol>
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
              </div>
              <div class="form-group">
                  <label for="departmentName">designation</label>
                  <input type="text" class="form-control" id="designation" placeholder="Enter designatio" v-model="designation">
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