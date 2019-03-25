<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">attendance</a></li>
                <li class="breadcrumb-item active" aria-current="page">this week</li>
        </ol>
</nav>
<ul class="nav nav-tabs" id="myTab" role="tablist">

        <li class="nav-item">
          <a class="nav-link" id="monday-tab" data-toggle="tab" href="#monday" role="tab" aria-controls="monday" aria-selected="false">today</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="tuesday-tab" data-toggle="tab" href="#tuesday" role="tab" aria-controls="tuesday" aria-selected="false">yesterday</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" id="wednesday-tab" data-toggle="tab" href="#wednesday" role="tab" aria-controls="wednesday" aria-selected="false"  v-for = "response in info.response['2'].slice(0,1)">
             <p v-if = "response.weekday == 0">monday</p>
             <p v-if = "response.weekday == 1">tuesday</p>
             <p v-if = "response.weekday == 2">wednesday</p>
             <p v-if = "response.weekday == 3">thursday</p>
             <p v-if = "response.weekday == 4">friday</p>
             <p v-if = "response.weekday == 5">saturday</p>
             <p v-if = "response.weekday == 6">sunday</p>
            </a>
        </li>
        <li class="nav-item">
         <a class="nav-link" id="thursday-tab" data-toggle="tab" href="#thursday" role="tab" aria-controls="thursday" aria-selected="false"  v-for = "response in info.response['3'].slice(0,1)">
        
                <p v-if = "response.weekday == 0">monday</p>
                <p v-if = "response.weekday == 1">tuesday</p>
                <p v-if = "response.weekday == 2">wednesday</p>
                <p v-if = "response.weekday == 3">thursday</p>
                <p v-if = "response.weekday == 4">friday</p>
                <p v-if = "response.weekday == 5">saturday</p>
                <p v-if = "response.weekday == 6">sunday</p>
               </a>
        </li>
        <li class="nav-item">
         <a class="nav-link" id="friday-tab" data-toggle="tab" href="#friday" role="tab" aria-controls="friday" aria-selected="false"  v-for = "response in info.response['4'].slice(0,1)">
                <p v-if = "response.weekday == 0">monday</p>    
                <p v-if = "response.weekday == 1">tuesday</p>
                <p v-if = "response.weekday == 2">wednesday</p>
                <p v-if = "response.weekday == 3">thursday</p>
                <p v-if = "response.weekday == 4">friday</p>
                <p v-if = "response.weekday == 5">saturday</p>
                <p v-if = "response.weekday == 6">sunday</p>
               </a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent"    >
        <div class="tab-pane fade" id="monday" role="tabpanel" aria-labelledby="monday-tab">
                <table class="table table-hover table-responsive-sm table-responsive-md ">
                        <thead class="thead-dark">
                            <tr>
                            <th >employee </th>
                            <th >time in</th>
                            <th> time out</th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for = "response in info.response['0']">
                                <td>{{response.user.username}}</td>
                                <td>{{response.timeIn}}</td>
                                <td>{{response.timeOut  }}</td>
                            </tr>
                        </tbody>
                </table>
        </div>
        <div class="tab-pane fade" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                <table class="table table-hover table-responsive-sm table-responsive-md ">
                        <thead class="thead-dark">
                            <tr>
                            <th >employee </th>
                            <th >time in</th>
                            <th> time out</th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for = "response in info.response['1']">
                                <td>{{response.user.username}}</td>
                                <td>{{response.timeIn}}</td>
                                <td>{{response.timeOut  }}</td>
                            </tr>
                        </tbody>
                </table>
        </div>
        <div class="tab-pane fade" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                <table class="table table-hover table-responsive-sm table-responsive-md ">
                        <thead class="thead-dark">
                            <tr>
                            <th >employee </th>
                            <th >time in</th>
                            <th> time out</th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for = "response in info.response['2']">
                                <td>{{response.user.username}}</td>
                                <td>{{response.timeIn}}</td>
                                <td>{{response.timeOut  }}</td>
                            </tr>
                        </tbody>
                </table>
        </div>
        <div class="tab-pane fade" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                <table class="table table-hover table-responsive-sm table-responsive-md ">
                        <thead class="thead-dark">
                            <tr>
                            <th >employee </th>
                            <th >time in</th>
                            <th> time out</th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for = "response in info.response['3']">
                                <td>{{response.user.username}}</td>
                                <td>{{response.timeIn}}</td>
                                <td>{{response.timeOut  }}</td>
                            </tr>
                        </tbody>
                </table>
        </div>
        <div class="tab-pane fade" id="friday" role="tabpanel" aria-labelledby="friday-tab">
                <table class="table table-hover table-responsive-sm table-responsive-md ">
                        <thead class="thead-dark">
                            <tr>
                            <th >employee </th>
                            <th >time in</th>
                            <th> time out</th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for = "response in info.response['4']">
                                <td>{{response.user.username}}</td>
                                <td>{{response.timeIn}}</td>
                                <td>{{response.timeOut  }}</td>
                            </tr>
                        </tbody>
                </table>
        </div>
      </div>
</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "thisWeek",
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
            axios.get('http://127.0.0.1:8000/api/attendance-list/week/')
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