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
            </div>
              <div class="form-group">
                  <label for="additionAmount">amount</label>
                  <input type="number" class="form-control" id="deductionAmount" placeholder="allowance amount" v-model="amount">
                </div> 
                <div class="form-group">
                  <label for="description">description</label>
                  <input type="text" class="form-control" id="description" placeholder="briefly describe why" v-model="description">
                </div> 
              <hr/>
              <button type="submit" class="btn btn-success">submit</button>
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