<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#"><router-link :to="{name: 'deductions'}">deductions</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page" v-for = "data in context.context" >{{data.deductionName}}</li>
        </ol>
</nav>
<div style="padding:15px 5px">
    <p>
        <a class="btn btn-outline-danger" data-toggle="collapse" href="#addDeduction" role="button" aria-expanded="false" aria-controls="addAccount" v-for = "data in context.context" >
            + deduct from employee for <b>{{data.deductionName}}</b>
        </a>

      </p>
      <div class="row">
      <div class="collapse col-6" id="addDeduction">
        <div class="card card-body">
            <form id="addDeductionForm"  @submit.prevent="processForm()">
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
                  <label for="deductionAmount"><b>amount</b></label>
                  <input type="number" class="form-control" id="deductionAmount" placeholder="amount to deduct" v-model="amount">
                  <p v-if="amountErrors.length">
                    <ul>
                      <small><li v-for="error in amountErrors"><p class="text-danger">{{ error }}</p></li></small>
                    </ul>
                  </p>
                </div> 
                <div class="form-group">
                  <label for="repayment"><b>repayment period</b></label>
                  <input type="number" class="form-control" id="repayment" placeholder="repayment period" v-model="repayment">
                  <p v-if="repaymentPeriodErrors.length">
                    <ul>
                      <small><li v-for="error in repaymentPeriodErrors"><p class="text-danger">{{ error }}</p></li></small>
                    </ul>
                  </p>
                </div> 
                <div class="form-group">
                  <label for="description"><b>description</b></label>
                  <input type="text" class="form-control" id="description" placeholder="Describe why you are deducting" v-model="description">
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
                          <div class="alert alert-primary" role="alert"  v-if="! employeeErrors.length && ! amountErrors.length && ! repaymentPeriodErrors.length">
                            
                            CONFIRM !!<br/>
                            <div v-for= " data in info2.account">
                                <div v-if = "data.id == account_id">                                
                                            deduct from -- <b>{{data.username.username}}</b>
                                </div>
                            </div>
                            the total amount of-- <b>{{amount}}</b> to be paid back in --<b>{{repayment}}</b> months
                            with installments of -- {{amountThisMonth}} every month.
                        </div>
                        <div class="alert alert-danger" role="alert"  v-if="employeeErrors.length || amountErrors.length || repaymentPeriodErrors.length">
                          please correct the following
                            <ul>
                                <li v-for="error in employeeErrors"><p class="text-danger">{{ error }}</p></li>
                            </ul>
                            <ul>
                                <li v-for="error in amountErrors"><p class="text-danger">{{ error }}</p></li>
                            </ul>
                            <ul>
                                <li v-for="error in repaymentPeriodErrors"><p class="text-danger">{{ error }}</p></li>
                            </ul>
                        </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">cancel</button>
                          <button type="submit" class="btn btn-primary" v-if="! amountErrors.length && ! employeeErrors.length && ! repaymentPeriodErrors.length">deduct from this user</button>
                        </div>
                      </div>
                    </div>
                  </div>
            </form>
        </div>
      </div>

      </div>
</div>

<table class="table table-hover table-responsive-sm table-responsive-md ">
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
        <td ><b class="text-danger">- {{ numberWithCommas(account.deductionAmount)}}</b></td>
        <td>{{account.description}}</td>

      </tr>
    </tbody>
  </table>
</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "deductionDetail",
        data() {
            return {
            context: null,
            info: null,
            info2: null,
            account_id : null,
            amount : null,
            repayment: 1,
            amountThisMonth: null,
            description : 'none given',
            employeeErrors: [],repaymentPeriodErrors: [],amountErrors: []
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
            axios.get('http://127.0.0.1:8000/api/internal-deduction-accounts/'+this.$route.params.id+'/')
            .then(response => {
              this.info = {"account": response.data }  
            })
            .catch((err) => {
                console.log(err)
            })
            axios.get('http://127.0.0.1:8000/api/internal-deduction-type/'+this.$route.params.id+'/')
            .then(response => {
              this.context = {"context": response.data }  
            })
            .catch((err) => {
                console.log(err)
            })
            axios.get(`http://127.0.0.1:8000/api/accounts-list/`)
            .then(response => {
            this.info2 = {"account": response.data }
            })
            .catch(e => {
            this.errors.push(e)
            })

  
            },
            range: function(start, end) {
                var ans = [];
                for (let i = start; i <= end; i++) {
                    ans.push(i);
                }
                return ans;
            },
            isLeapYear: function(year) { 
                return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); 
            },

            getDaysInMonth: function(year, month) {
                return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
            },

            addMonths: function(date, value) {
                var d = new Date(date),
                    n = date.getDate();
                d.setDate(1);
                d.setMonth(d.getMonth() + value);
                d.setDate(Math.min(n, this.getDaysInMonth(d.getFullYear(), d.getMonth())));
                return d;
            },
            checkForm: function (e) {
              this.amountErrors = []
              this.repaymentPeriodErrors = []
              this.employeeErrors = []

              this.amountThisMonth = this.amount / this.repayment
              this.amountThisMonth = this.amountThisMonth.toFixed(2)

              if (this.amount && this.account_id && this.repayment) {
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

              if (this.repayment > 12 ) {
                this.repaymentPeriodErrors.push('repayment must be within a year, you can change this in your settings');
             
              }
              if (this.repayment < 1 ) {
                this.repaymentPeriodErrors.push('repayment must be done in 1 or more months');
             
              }
              e.preventDefault();
            },
            processForm: function() {
              console.log(this.amount)
              console.log(this.description)
              console.log(this.account_id)
              for (var data of this.range(0,this.repayment)){
                var nextMonth = this.addMonths(new Date(), data);
                var month = nextMonth.getMonth()
                var year = nextMonth.getFullYear()
                this.amountThisMonth = this.amount / this.repayment

                let date = new Date(year,month,1)
                let date_formatted = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()

                
                  axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/addInternalDeduction/',
                    data: {
                      account_id: this.account_id,
                      internalDeduction_id: this.$route.params.id,
                      date: date_formatted,
                      amount: this.amountThisMonth,
                      description: this.description
                      
                      
                    }
                  })
                  window.location.reload()
              }
              
              
            
            }
          
        }
        }
        </script>
        
        <style>
        
        </style>