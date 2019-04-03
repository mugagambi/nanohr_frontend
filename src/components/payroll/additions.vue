<template>
<div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">allowances</li>
        </ol>
      </nav>
      <div style="padding:15px 5px">
          <p>
              <a class="btn btn-primary" data-toggle="collapse" href="#addAllowance" role="button" aria-expanded="false" aria-controls="addAccount">
                + add allowance type
              </a>
      
            </p>
            <div class="row">
            <div class="collapse col-6" id="addAllowance">
              <div class="card card-body">
                  <form id="addDeductionForm"  @submit.prevent="processForm()">
                    <div class="form-group">
                        <label for="deductionName">allowance name</label>
                        <input type="text" class="form-control" id="allowanceName" placeholder="name the allowance" v-model="allowanceName">
                        <p v-if="allowanceNameErrors.length">
                          <ul>
                            <small><li v-for="error in allowanceNameErrors"><p class="text-danger">{{ error }}</p></li></small>
                          </ul>
                        </p>
                      </div> 
                      <div class="form-group">
                        <label for="description">description</label>
                        <input type="text" class="form-control" id="description" placeholder="Describe the allowance briefly" v-model="allowanceDescription">
                        <p v-if="allowanceDescriptionErrors.length">
                          <ul>
                            <small><li v-for="error in allowanceDescriptionErrors"><p class="text-danger">{{ error }}</p></li></small>
                          </ul>
                        </p>
                      </div> 
                    <hr/>
                                      <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addAllowanceModal" @click="checkForm()">
                  submit
                </button>

              <!-- Modal -->
              <div class="modal fade" id="addAllowanceModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="addDeductionModalLabel">add allowance type</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="alert alert-primary" role="alert"  v-if="! allowanceNameErrors.length && ! allowanceDescriptionErrors.length">
                          CONFIRM !!<br/>
                          add allowance  -- <b>{{allowanceName}}</b> decribed as --<b>{{allowanceDescription}}</b>
                      </div>
                      <div class="alert alert-danger" role="alert"  v-if="allowanceNameErrors.length || allowanceDescriptionErrors.length">
                        please correct the following
                          <ul>
                              <li v-for="error in allowanceNameErrors"><p class="text-danger">{{ error }}</p></li>
                          </ul>
                          <ul>
                              <li v-for="error in allowanceDescriptionErrors"><p class="text-danger">{{ error }}</p></li>
                          </ul>
                      </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">cancel</button>
                        <button type="submit" class="btn btn-primary" v-if="! allowanceNameErrors.length && ! allowanceDescriptionErrors.length">add allowance type</button>
                      </div>
                    </div>
                  </div>
                </div>
                  </form>
              </div>
            </div>
      
            </div>
      </div>
  <div class = "row" >
    <div style="padding:10px 20px" v-for="addition in info2.addition" >
    <div   class="card" style="width: 18rem;">
        <div class="card-header">
            <strong>{{ addition.additionTypeName}} </strong>
          </div>
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p class="card-text">{{addition.description}}</p><hr/>
          
          <a href="#" class="card-link"><router-link :to="`/additionDetail/`+ addition.id">view employees</router-link></a>  
        
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
              allowanceName: null,
              allowanceDescription: null,
              allowanceNameErrors: [],allowanceDescriptionErrors: []
              
            }
          
          },
          methods: {
            checkForm: function (e) {
              this.allowanceNameErrors = []
              this.allowanceDescriptionErrors = []

              if (this.allowanceName && this.allowanceDescription) {
                return true;
              }

              if (!this.allowanceName) {
                this.allowanceNameErrors.push('allowance name required');
            
              }

              if (!this.allowanceDescription) {
                this.allowanceDescriptionErrors.push('description required');
             
              }
              e.preventDefault();
            },
            processForm: function(id) {
              axios({
              method: 'post',
              url: 'http://127.0.0.1:8000/api/salary-addition-types-list/',
              data: {

                additionTypeName:this.allowanceName,
                description: this.allowanceDescription
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