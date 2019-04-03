<template>
<div class = "accounts">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Accounts</li>
            </ol>
          </nav>
          <div style="padding:15px 5px">
              <p>
                  <a class="btn btn-primary" data-toggle="collapse" href="#addAccount" role="button" aria-expanded="false" aria-controls="addAccount">
                    + add Account
                  </a>
          
                </p>
                <div class="row">
              
                <form class ="col-12" id="wageForm" @submit.prevent = "processForm()">
                
                <div class="collapse col-10 " id="addAccount">
                    <div class="accordion" id="accordionExample">
                        <div class="card border-0">
                          <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                Step #1 ---employee account detail
                              </button>
                            </h2>
                          </div>
                       
                          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                              <div class="card card-body border-0">

                                  <div class="form-group">
                                      <label for="selectUser" class="rounded"><b>select employee</b></label>
                                      <select class="form-control" id="selectUser" v-model="employee_account_id" >
                                        <option v-for="response in info2.response" :value="response.id" >{{response.username}}</option>
                                      </select>
                                      <p v-if="employeeErrors.length">
                                          <ul>
                                            <small><li v-for="error in employeeErrors"><p class="text-danger">{{ error }}</p></li></small>
                                          </ul>
                                        </p>
                                  </div>
                                  <div class="form-group">
                                        <label for="selectPaymentMethod" class="rounded"><b>preffered Payment Method </b></label>
                                        <select class="form-control" id="selectPaymentMethod" v-model="paymentMethod_id" >
                                          <option v-for="response in info3.response" :value="response.id" >{{response.paymentMethod}}</option>
                                        </select>
                                        <p v-if="paymentMethodErrors.length">
                                            <ul>
                                              <small><li v-for="error in paymentMethodErrors"><p class="text-danger">{{ error }}</p></li></small>
                                            </ul>
                                          </p>
                                    </div> 
                                        
                              </div>
                          </div>
                        
                        </div>
                        <div class="card border-0">
                            <div class="card-header border-0" id="headingAccounts">
                              <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseAccounts" aria-expanded="false" aria-controls="collapseAccounts">
                                  Step #3 ---accounts
                                </button>
                              </h2>
                            </div>
                            <div id="collapseAccounts" class="collapse" aria-labelledby="headingAccounts" data-parent="#accordionExample">
                              <div class="card-body border-0">
                                  <div class="form-group">
                                      <label for="bankName"><b>bank</b></label>
                                      <input type="text" class="form-control" id="bank" placeholder="Enter bank name" v-model="bankName">
                                    </div> 
                                    <div class="form-group">
                                        <label for="bankName"><b>bank account number</b></label>
                                        <input type="text" class="form-control" id="bank" placeholder="Enter bank account number" v-model="bankAccountNumber">
                                      </div> 
                                    <div class="form-group">
                                      <label for="phoneNumber"><b>phone number</b></label>
                                      <input type="text" class="form-control" id="phoneNumber" placeholder="Enter phone number" v-model="phoneNumber">
                                      <p v-if="phoneNumberErrors.length">
                                          <ul>
                                            <small><li v-for="error in phoneNumberErrors"><p class="text-danger">{{ error }}</p></li></small>
                                          </ul>
                                        </p>
                                    </div>
                                    
                              </div>
                            </div>
                          </div>
                        <div class="card border-0">
                          <div class="card-header border-0" id="headingTwo">
                            <h2 class="mb-0">
                              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               Step #2 ---employee wage detail
                              </button>
                            </h2>
                          </div>
                          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body border-0">
                                <div class="card card-body border-0">
                                 
                                      <div class="form-group">
                                          <label for="selectSalaryType" class="rounded"><b>select existing wage type</b></label>
                                          <select class="form-control" id="selectSalaryType" v-model="salaryType_id" >
                                            <option v-for="response in info4.response" :value="response.id" >basic pay : <b>{{numberWithCommas(response.basicPay)}}</b>, <p v-if = "response.commision.commisionPercentageRate > 0 ">Commision :<b>{{response.commision.commisionPercentageRate}}</b></p><p v-else>no commision</p></option>
                                          </select>
                                          <p v-if="salaryTypeErrors.length">
                                              <ul>
                                                <small><li v-for="error in salaryTypeErrors"><p class="text-danger">{{ error }}</p></li></small>
                                              </ul>
                                            </p>
                                      </div>

                                      <a  data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                          or create new
                                          
                                        </a>
                                        <div class="collapse" id="collapseExample">
                                          <hr/>
                                            <form id="wageForm" @submit.prevent = "processWageForm()">
                                            <div class="">
                                                <div class="form-group">
                                                    <label for="basicPay"><b> basic pay </b></label>
                                                    <input type="number" class="form-control" id="basicPay" placeholder="Basic Pay for new employee" v-model="newBasicPay">
                                                    <p v-if="basicPayErrors.length">
                                                        <ul>
                                                          <small><li v-for="error in basicPayErrors"><p class="text-danger">{{ error }}</p></li></small>
                                                        </ul>
                                                      </p>
                                                  </div> 
                                                  <div class="form-group">
                                                      <label for="commision"><b>% commision (optional) </b></label>
                                                      <input type="number" class="form-control" id="commision" placeholder="percentage commision on sales if any" v-model="newCommisionPercentageRate">
                                                      <p v-if="commisionPercentageRateErrors.length">
                                                          <ul>
                                                            <small><li v-for="error in commisionPercentageRateErrors"><p class="text-danger">{{ error }}</p></li></small>
                                                          </ul>
                                                        </p>
                                                    </div> 
      
                                                    <!-- Button trigger modal -->
                                                    <button type="submit" class="btn btn-primary" @click="checkFormCommision()">
                                                        create
                                                      </button>
                                              
                                            </div>
                                            </form>
                                            <div style="padding: 15px 15px" v-if=" commision_id > 1">
                                            <div class="alert alert-primary"  role="alert" >
                                              successfully created !! Finish creating account .
                                            </div>
                                            </div>
                                          </div>

                                      <hr/>
                                      <!-- Button trigger modal -->
                                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addAccountModal" @click="checkFormAccount()">
                                          finish
                                        </button>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
                                  <!-- Modal -->
                                  <div class="modal fade" id="addAccountModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                          </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="alert alert-primary" role="alert"  v-if="! employeeErrors.length && ! phoneNumberErrors.length && ! salaryTypeErrors.length" >
                                                CONFIRM !!<br/>
                                                <div v-for= " data in info2.response">
                                                  <p v-if=" data.id == employee_account_id"> 
                                                     add account for employee  <b>{{data.username}} </b> 
                                                   </p>
                                                  </p>
                                                </div>
                                            </div>
                                            <div class="alert alert-danger" role="alert"  v-if="employeeErrors.length || phoneNumberErrors.length || salaryTypeErrors.length ">
                                              please correct the following
                                                <ul>
                                                    <li v-for="error in employeeErrors"><p class="text-danger">{{ error }}</p></li>
                                                </ul>
                                                <ul>
                                                    <li v-for="error in phoneNumberErrors"><p class="text-danger">{{ error }}</p></li>
                                                </ul>
                                                <ul>
                                                    <li v-for="error in salaryTypeErrors"><p class="text-danger">{{ error }}</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="submit" class="btn btn-primary" v-if="! employeeErrors.length && ! phoneNumberErrors.length && ! salaryTypeErrors.length ">add employee</button>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
               </form>
                </div>

            
          </div>
          
  
  <table class="table table-hover table-responsive-sm table-responsive-md">
    <thead class="thead-dark">
      <tr>
        <th >username</th>
        <th >preffered payment</br> method</th>
        <th >type of salary</th>
        <th >bankname</th>
        <th ></th>
      </tr>
    </thead>
    
    <tbody>
      <tr v-for = "account in info.account">
        <td>{{ account.username.username }}</td>
        <td>{{ account.prefferedPaymentMethod.paymentMethod}}</td>
        <td>{{ account.salaryType.name}}</td>
        <td>{{ account.bankName}}</td>
        <td><button type="button" class="btn btn-outline-link" >
          <router-link :to="`/userAccountDetail/` + account.id + `/`"><img src="@/assets/Data-View-Details-icon.png"></router-link>
          </button></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'accounts',
  data () {
    return {
      info: null,info2: null,info3: null,info4: null,
      info5: null,employee_account_id: null,
      paymentMethod_id:null,bankAccountNumber:null,
      salaryType_id: null,bankName: null,
      phoneNumber: null,newBasicPay: null,newCommisionPercentageRate: 0,
      commision_id:null,wageTypeName:null,name: null,
      employeeErrors: [],paymentMethodErrors: [],
      phoneNumberErrors:[],salaryTypeErrors: [],
      basicPayErrors: [],commisionPercentageRateErrors: []
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
    axios.get('http://127.0.0.1:8000/api/userlist/')
    .then(response => {
      this.info2 = {"response": response.data }  
    })
    .catch((err) => {
        console.log(err)
    })
    axios.get('http://127.0.0.1:8000/api/available-payment-methods-list/')
    .then(response => {
      this.info3 = {"response": response.data }  
    })
    .catch((err) => {
        console.log(err)
    })
    axios.get('http://127.0.0.1:8000/api/salary-type-list/')
    .then(response => {
      this.info4 = {"response": response.data }  
    })
    .catch((err) => {
        console.log(err)
    })
    axios.get('http://127.0.0.1:8000/api/salary-addition-types-list/')
    .then(response => {
      this.info5 = {"response": response.data }  
    })
    .catch((err) => {
        console.log(err)
    })
  },
  methods: {
  numberWithCommas: function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
  checkFormAccount: function (e) {
    this.employeeErrors = []
    this.paymentMethodErrors = []
    this.phoneNumberErrors = []
    this.salaryTypeErrors = []
    if ( this.employee_account_id && this.paymentMethod_id && this.phoneNumber && this.salaryType_id) {
      return true;
    }

    if (!this.employee_account_id) {
      this.employeeErrors.push('employee required, please select one ');
  
    }
    if (!this.paymentMethod_id) {
      this.paymentMethodErrors.push('payment method required, please select one. This may be changed later');

    }
    if (!this.phoneNumber) {
      this.phoneNumberErrors.push('phone number required, please enter one. This may be changed later');

    }
    if (!this.salaryType_id) {
      this.salaryTypeErrors.push('wage type required, please select one, or create one . This may be changed later');

    }
    e.preventDefault();
  },
  checkFormCommision: function (e) {
    this.basicPayErrors = []
    this.commisionPercentageRateErrors = [] 

    if (this.newBasicPay && this.newCommisionPercentageRate) {
      return true;
    }

    if (!this.newBasicPay) {
      this.basicPayErrors.push('basic pay required ,please enter. This can be changed later');
  
    }
    if ( this.newCommisionPercentageRate > 100 ) {
      this.commisionPercentageRateErrors.push('the percentage you have entered is too large, should be below 100');

    }
    if ( this.newCommisionPercentageRate < 0 ) {
      this.commisionPercentageRateErrors.push('the percentage you have entered is too small, should be above 0');

    }
    e.preventDefault();
  },
  processForm: function() {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/addAccount/',
      data: {
        user_id: this.employee_account_id,
        availablePaymentMethod_id: this.paymentMethod_id,
        bankAccountNumber: this.bankAccountNumber,
        salaryType_id: this.salaryType_id,
        bankName:this.bankName,
        phoneNumber: this.phoneNumber
      }
    })
    window.location.reload();
    
    
    
  },
  processWageForm: function() {
    if (this.newBasicPay > 0) {
      this.name = "fiuhsi" 

    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/commision-list/',
      data: {
        commisionName: this.name,
        commisionPercentageRate: this.newCommisionPercentageRate
      }
    }).then(response => {
      var data = response.data
      this.commision_id = data.id
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/addSalaryType/',
      data: {
        commision_id: this.commision_id,
        basicPay: this.newBasicPay,
        name: this.name
      }
     }).then(response => {
      var data2 = response.data
      this.salaryType_id = data2.id})})

    
    } 
  }
  }
}
</script>

<style>

</style>
