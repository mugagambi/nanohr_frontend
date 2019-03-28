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
              </div>
              <hr/>
              <button type="submit" class="btn btn-primary">Submit</button>
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