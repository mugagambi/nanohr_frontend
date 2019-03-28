<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">attendance</a></li>
                
                <li class="breadcrumb-item active" aria-current="page">this month</li>
        </ol>
</nav>

<div class="row">
  <div style="padding:15px" v-for = "data in Object.keys(info.response)">
    <a href=""  data-toggle="modal" :data-target="`#modal` + data" ><u>{{data}}</u></a>
  </div>
</div>

<hr/>
<form id="searchDate" @submit.prevent="processForm()"></form>
<div class="input-group form-group col-5" style="padding: 0px" >
    <input type="date" name="bday" max="3000-12-31" 
           min="1000-01-01" class="form-control" v-model="date">
           <div class="input-group-append ">
              <button type="submit" class="btn btn-outline-primary" >search</button>
            </div>
   </div>
  </form>
   <hr/>


<!-- Modal -->
<div class="modal fade" v-for = "data in Object.keys(info.response)" :id= "`modal`+ data " tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> date :{{data}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="table table-hover table-responsive-sm table-responsive-md ">
          <thead >
            <tr>
              <th >employee </th>
              <th >time in</th>
              <th> time out</th>
      
            </tr>
          </thead>
          <tbody>
            <tr v-for = "response in info.response[data]">
              <td>{{ response.user.username }}</a></td>
              <td > {{response.timeIn}} </td>
              <td>{{ response.timeOut}}</td>
      
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "thisMonth",
        data() {
            return {
            info: null,
            date: ''
            }
        },
        methods: {
            processForm: function() {
              axios({
                method: 'get',
                url: 'http://127.0.0.1:8000/api/attendance-list-full/' + this.date ,
            
              })
              window.location.reload()
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
            axios.get('http://127.0.0.1:8000/api/attendance-list/month/')
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