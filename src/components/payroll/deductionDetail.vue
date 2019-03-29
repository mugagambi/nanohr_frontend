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
            </div>
              <div class="form-group">
                  <label for="deductionAmount"><b>amount</b></label>
                  <input type="number" class="form-control" id="deductionAmount" placeholder="amount to deduct" v-model="amount">
                </div> 
                <div class="form-group">
                  <label for="repayment"><b>repayment period</b></label>
                  <input type="number" class="form-control" id="repayment" placeholder="repayment period" v-model="repayment">
                </div> 
                <div class="form-group">
                  <label for="description"><b>description</b></label>
                  <input type="text" class="form-control" id="description" placeholder="Describe why you are deducting" v-model="description">
                </div> 
              <hr/>
              <button type="submit" class="btn btn-danger">submit</button>
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
        <td ><b class="text-danger">- {{account.deductionAmount}}</b></td>
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
            account_id : '',
            amount : '',
            repayment: '',
            description : '',
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
            processForm: function() {
              for (var data of this.range(0,this.repayment)){
                var nextMonth = this.addMonths(new Date(), data);
                var month = nextMonth.getMonth()
                var year = nextMonth.getFullYear()
                var amountThisMonth = this.amount / this.repayment

                let date = new Date(year,month,1)
                let date_formatted = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()

                console.log(date_formatted)
                  axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/addInternalDeduction/',
                    data: {
                      account_id: this.account_id,
                      internalDeduction_id: this.$route.params.id,
                      date: date_formatted,
                      amount: amountThisMonth,
                      description: this.description
                      
                      
                    }
                  })
              }
              window.location.reload()
              
            
            }
          
        }
        }
        </script>
        
        <style>
        
        </style>