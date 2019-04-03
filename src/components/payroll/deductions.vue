<template>
<div>
  
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">deductions</li>
        </ol>
      </nav>
      <div style="padding:15px 5px">
        <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#addDeduction" role="button" aria-expanded="false" aria-controls="addAccount">
              + add Deduction type
            </a>
    
          </p>
          <div class="row">
          <div class="collapse col-6" id="addDeduction">
            <div class="card card-body">
                <form id="addDeductionForm"  @submit.prevent="processForm()">
                  <div class="form-group">
                      <label for="deductionName">deduction name</label>
                      <input type="text" class="form-control" id="bank" placeholder="name the deduction" v-model="deductionName">
                      <p v-if="deductionNameErrors.length">
                        <ul>
                          <small><li v-for="error in deductionNameErrors"><p class="text-danger">{{ error }}</p></li></small>
                        </ul>
                      </p>
                    </div> 
                    <div class="form-group">
                      <label for="description">description</label>
                      <input type="text" class="form-control" id="phoneNumber" placeholder="Describe the deduction briefly" v-model="deductionDescription">
                      <p v-if="descriptionErrors.length">
                        <ul>
                          <small><li v-for="error in descriptionErrors"><p class="text-danger">{{ error }}</p></li></small>
                        </ul>
                      </p>
                    </div> 
                  <hr/>
                
                  <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addDeductionModal" @click="checkForm()">
                  submit
                </button>

              <!-- Modal -->
              <div class="modal fade" id="addDeductionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="addDeductionModalLabel">add deduction</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="alert alert-primary" role="alert"  v-if="! deductionNameErrors.length && ! descriptionErrors.length">
                          CONFIRM !!<br/>
                          add deduction type  -- <b>{{deductionName}}</b> decribed as --<b>{{deductionDescription}}</b>
                      </div>
                      <div class="alert alert-danger" role="alert"  v-if="deductionNameErrors.length || descriptionErrors.length">
                        please correct the following
                          <ul>
                              <li v-for="error in deductionNameErrors"><p class="text-danger">{{ error }}</p></li>
                          </ul>
                          <ul>
                              <li v-for="error in descriptionErrors"><p class="text-danger">{{ error }}</p></li>
                          </ul>
                      </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">cancel</button>
                        <button type="submit" class="btn btn-primary" v-if="! deductionNameErrors.length && ! descriptionErrors.length">add deduction type</button>
                      </div>
                    </div>
                  </div>
                </div>
                </form>
            </div>
          </div>
    
          </div>
    </div>
  <hr/>
  <div class = "row " >
    <div style="padding:10px 20px" v-for="deduction in info.deduction" >
      <div   class="card" style="width: 18rem;">
          <div class="card-header">
             <strong> {{ deduction.deductionName}} </strong>
            </div>
        <div class="card-body">
          
          <p class="card-text">{{deduction.description}}</p><hr/>
   
          <a href="#" class="card-link"><router-link :to="`/deductionDetail/`+ deduction.id">view employees</router-link></a>          

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
              deductionName: null,
              deductionDescription: null,
              deductionNameErrors: [],descriptionErrors: []
              
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
          },
          methods: {
          checkForm: function (e) {
              this.deductionNameErrors = []
              this.descriptionErrors = []
              if (this.deductionName && this.deductionDescription) {
                return true;
              }

              if (!this.deductionName) {
                this.deductionNameErrors.push('deduction name required');
            
              }

              if (!this.deductionDescription) {
                this.descriptionErrors.push('description required');
             
              }
              e.preventDefault();
            },
          processForm: function() {
            
            axios({
              method: 'post',
              url: 'http://127.0.0.1:8000/api/internal-deduction-type-list/',
              data: {

                deductionName:this.deductionName,
                description: this.deductionDescription
              }
            })
            window.location.reload()
            
            
          }
          }
        }  
        
        </script>
        
        <style>
        
        </style>