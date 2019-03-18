<template>
<div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">allowances</li>
        </ol>
      </nav>
  <div class = "row" >
    <div style="padding:10px 20px" v-for="addition in info2.addition" >
    <div   class="card" style="width: 18rem;">
        <div class="card-header">
            <strong>{{ addition.additionTypeName}} </strong>
          </div>
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p class="card-text">{{addition.description}}</p><hr/>
          <button type="button" class="btn btn-outline-primary card-link" data-toggle="modal" :data-target="`#`+ addition.additionTypeName">
              + add user
            </button>
          <a href="#" class="card-link"><router-link :to="`/additionDetail/`+ addition.id">users</router-link></a>

                <!-- Modal -->
                <div class="modal fade" :id="addition.additionTypeName" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <form id="addAllowanceForm" @submit.prevent="processForm(addition.id)">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel" ></h5><b>adding to {{addition.additionTypeName}}</b> </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">

                          <div class="form-group">
                              <label for="exampleFormControlSelect1"><b>select user</b></label>
                              <select class="form-control"  id="exampleFormControlSelect1" v-model="user" >
                                <option v-for = "account in info.account" :value= "account.id">{{account.username.username}}</option>
                              </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1"><b>amount</b></label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="00" v-model="amount">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description"></textarea>
                            </div>
                      </div>
                      <div class="modal-footer form-group">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-outline-success">+ add allowance</button>
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
          name: 'additions',
          data () {
            return {
              count : 0,
              info : null,
              info2 : null,
              user : '',
              amount : '',
              description : '',
              
            }
          
          },
          methods: {
            processForm: function(id) {
              axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/addAllowance/',
                data: {
                  account_id: this.user,
                  salaryAdditionType_id: id,
                  amount: this.amount,
                  description: this.description
                  
                  
                }
              })
              window.location.reload()
            }
          },
          created() {
            axios.get(`http://127.0.0.1:8000/api/accounts-list/`)
            .then(response => {
            this.info = {"account": response.data }
            })
            .catch(e => {
            this.errors.push(e)
            })
            axios.get(`http://127.0.0.1:8000/api/salary-addition-types-list/`)
            .then(response => {
              this.info2 = {"addition": response.data }
            })
            .catch(e => {
              this.errors.push(e)
            })
          },
          
        }
        </script>
        
        <style>
        
        </style>