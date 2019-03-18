<template>
<div>
  
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">deductions</li>
        </ol>
      </nav>
  <div class = "row " >
    <div style="padding:10px 20px" v-for="deduction in info.deduction" >
      <div   class="card" style="width: 18rem;">
          <div class="card-header">
             <strong> {{ deduction.deductionName}} </strong>
             <a href="#" class="badge badge-danger">3</a>
            </div>
        <div class="card-body">
          
          <p class="card-text">{{deduction.description}}</p><hr/>
          <button type="button" class="btn btn-outline-primary card-link" data-toggle="modal" :data-target="`#`+ deduction.deductionName">
              + add user
            </button>
          <a href="#" class="card-link"><router-link :to="`/deductionDetail/`+ deduction.id">view users</router-link></a>
  
                <!-- Modal -->
                <div class="modal fade" :id="deduction.deductionName" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <form id="addDeductionForm" @submit.prevent="processForm(deduction.id)">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header ">
                        <h5 class="modal-title" id="exampleModalLabel" ></h5><b>adding to {{deduction.deductionName}}</b> </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                          <div class="form-group">
                              <label for="exampleFormControlSelect1" class="border border-light  rounded"><b>select user</b></label>
                              <select class="form-control" id="exampleFormControlSelect1" v-model = "user">
                                <option v-for="account in info2.account" :value="account.id">{{account.username.username}}</option>
                              </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1 " class="border border-light  rounded" ><b>amount</b></label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="00" v-model="amount">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1" class="border border-light  rounded" >description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description"></textarea>
                            </div>
                      </div>
                      <div class="modal-footer form-group">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-outline-danger">add deduction</button>
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
          name: 'deductions',
          data () {
            return {
              info : null,
              info2: null,
              user : '',
              amount : '',
              description : '',
              
            }
          },
          methods: {
            processForm: function(id) {
              axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/addInternalDeduction/',
                data: {
                  account_id: this.user,
                  internalDeduction_id: id,
                  amount: this.amount,
                  description: this.description
                  
                  
                }
              })
              window.location.reload()
            }
          },
          created() {
            axios.get(`http://127.0.0.1:8000/api/internal-deduction-type-list/`)
            .then(response => {
              this.info = {"deduction": response.data };
             
              
            })
            .catch(e => { 
              this.errors.push(e)
            })
            axios.get(`http://127.0.0.1:8000/api/accounts-list/`)
            .then(response => {
            this.info2 = {"account": response.data }
            })
            .catch(e => {
            this.errors.push(e)
            })
          }
        }  
        
        </script>
        
        <style>
        
        </style>