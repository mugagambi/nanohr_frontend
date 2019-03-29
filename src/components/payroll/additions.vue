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
                      </div> 
                      <div class="form-group">
                        <label for="description">description</label>
                        <input type="text" class="form-control" id="description" placeholder="Describe the allowance briefly" v-model="allowanceDescription">
                      </div> 
                    <hr/>
                    <button type="submit" class="btn btn-primary">Submit</button>
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
              
            }
          
          },
          methods: {
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