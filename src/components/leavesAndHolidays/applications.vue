<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">leaves</a></li>
                
                <li class="breadcrumb-item active" aria-current="page">applications</li>
        </ol>
</nav>
<div class = "row " >
        <div style="padding:10px 20px" v-for="data in info.application" v-if="data.approved == false" >
          <div   class="card" style="width: 18rem;">
              <div class="card-header">
                 <strong> {{ data.user.username}} </strong>
                </div>
            <div class="card-body">
              <p ><b></b>{{data.leaveType.leaveType}} leave</p>
              <hr/>
              <p ><b>start date :</b>{{data.startDate}}</p>
              <p ><b>end date :</b>{{data.endDate}}</p>
              <hr/>
              <p class="card-text">{{data.description}}</p><hr/>
              <button type="button" class="btn btn-outline-primary card-link" data-toggle="modal" :data-target="`#`+ data.user.username">
                  approve
                </button>
                <button type="button" class="btn btn-outline-primary card-link" data-toggle="modal" :data-target="`#`+ data.user.username">
                        leave stats
                      </button>
      
                    <!-- Modal -->
                    <div class="modal fade" :id="data.user.username" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <form>
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header ">
                            <h5 class="modal-title" id="exampleModalLabel" ></h5><b>approve leave application</b> </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                              
                          </div>
                          <div class="modal-footer form-group">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-outline-success">approve</button>
                          </div>
                        </div>
                      </div>
                    </form>
                    </div>           
    
            </div>
          </div>
        </div>
        </div>
</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "applications",
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
            axios.get('http://127.0.0.1:8000/api/user-leaves-list/')
            .then(response => {
              this.info = {"application": response.data }  
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