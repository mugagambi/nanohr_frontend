<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#"><router-link :to="{name: 'additions'}">allowances</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page" v-for = "data in context.context" >{{data.additionTypeName}}</li>
        </ol>
</nav>
<div style="padding:15px 5px">
    <p>
        <a class="btn btn-outline-success" data-toggle="collapse" href="#addAllowance" role="button" aria-expanded="false" aria-controls="addAccount" v-for = "data in context.context" >
            + add <b>{{data.additionTypeName}}</b> allowance for employee
        </a>

      </p>
      <div class="row">
      <div class="collapse col-6" id="addAllowance">
        <div class="card card-body">
            <form id="addAllowanceForm"  @submit.prevent="processForm()">
            <div class="form-group">
                    <label for="selectUser" class="rounded"><b>select employee</b></label>
                    <select class="form-control" id="selectUser" v-model="account_id" >
                        <option v-for="response in info2.account" :value="response.id" >{{response.username.username}}</option>
                    </select>
                    <p v-if="employeeErrors.length">
                        <ul>
                          <small><li v-for="error in employeeErrors"><p class="text-danger">{{ error }}</p></li></small>
                        </ul>
                      </p>
            </div>
              <div class="form-group">
                  <label for="additionAmount">amount</label>
                  <input type="number" class="form-control" id="deductionAmount" placeholder="allowance amount" v-model="amount">
                  <p v-if="amountErrors.length">
                    <ul>
                      <small><li v-for="error in amountErrors"><p class="text-danger">{{ error }}</p></li></small>
                    </ul>
                  </p>
                </div> 
                <div class="form-group">
                  <label for="description">description</label>
                  <input type="text" class="form-control" id="description" placeholder="briefly describe why" v-model="description">
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
                        <h5 class="modal-title" id="addDeductionModalLabel">deduct from employee </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-primary" role="alert"  v-if="! employeeErrors.length && ! amountErrors.length ">
                        CONFIRM !!<br/>
                        <div v-for= " data in info2.account">
                            <div v-if = "data.id == account_id">                                
                                        add to -- <b>{{data.username.username}}</b>
                            </div>
                        </div>
                        the total amount of-- <b>{{amount}}</b>  
                    </div>
                    <div class="alert alert-danger" role="alert"  v-if="employeeErrors.length || amountErrors.length ">
                        please correct the following
                        <ul>
                            <li v-for="error in employeeErrors"><p class="text-danger">{{ error }}</p></li>
                        </ul>
                        <ul>
                            <li v-for="error in amountErrors"><p class="text-danger">{{ error }}</p></li>
                        </ul>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">cancel</button>
                        <button type="submit" class="btn btn-primary" v-if="! amountErrors.length && ! employeeErrors.length ">add allowance for this employee</button>
                    </div>
                    </div>
                </div>
                </div>
            </form>
        </div>
      </div>

      </div>
</div>

<table class="table table-hover table-responsive-sm table-responsive-md">
        <thead class="thead-dark">
          <tr>
            <th >username</th>
            <th >amount(Ksh)</th>
            <th> description</th>
    
          </tr>
        </thead>
        <tbody>
          <tr v-for = "account in info.account">
            <td><a href="#" ><router-link :to="`/userAccountDetail/` + account.account.id + `/`">{{ account.account.username.username }}</router-link></a></td>
            <td ><b class="text-success">+ {{ numberWithCommas(account.additionAmount)}}</b></td>
            <td>{{account.description}}</td>
    
          </tr>
        </tbody>
      </table>
</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "additionDetail",
        data() {
            return {
            context: null,
            info: null,
            info2: null,
            account_id : '',
            amount : '',
            description : 'none given',
            employeeErrors: [],amountErrors: []
            }
        },

        created() {
            this.fetchData()
        },

        watch: {
            '$route': 'fetchData'
        },

        methods: {
            numberWithCommas: function(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            fetchData() {
            axios.get('http://127.0.0.1:8000/api/salary-addition-accounts/'+this.$route.params.id+'/')
            .then(response => {
              this.info = {"account": response.data }  
                console.log(resp)
            })
            .catch((err) => {
                console.log(err)
            })
            axios.get(`http://127.0.0.1:8000/api/salary-addition-type/` + this.$route.params.id+'/')
            .then(response => {
            this.context = {"context": response.data }
            })
            axios.get(`http://127.0.0.1:8000/api/accounts-list/`)
            .then(response => {
            this.info2 = {"account": response.data }
            })
            },
            checkForm: function (e) {
              this.amountErrors = []
              this.employeeErrors = []


              if (this.amount && this.account_id ) {
                return true;
              }
              if (!this.account_id) {
                this.employeeErrors.push('employee required, please enter');
            
              }

              if (!this.amount) {
                this.amountErrors.push('amount required, please enter');
            
              }
              if (this.amount < 0) {
                this.amountErrors.push('amount must be more than zero');
            
              }
              e.preventDefault();
            },
            processForm: function() {
                axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/addAllowance/',
                data: {
                  account_id: this.account_id,
                  salaryAdditionType_id: this.$route.params.id,
                  amount: this.amount,
                  description: this.description
                  
                  
                }
              })
              window.location.reload()
            }
        }
        }
        </script>
        
        <style>
        
        </style>