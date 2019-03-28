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
                    </div> 
                    <div class="form-group">
                      <label for="description">description</label>
                      <input type="text" class="form-control" id="phoneNumber" placeholder="Describe the deduction briefly" v-model="deductionDescription">
                    </div> 
                  <hr/>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
          </div>
    
          </div>
    </div>
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
              deductionDescription: null
              
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