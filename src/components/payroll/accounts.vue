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
                <div class="collapse col-6" id="addAccount">
                  <div class="card card-body">
                      <form id="addDeductionForm"  @submit.prevent="processForm()">
                      <div class="form-group">
                          <label for="selectUser" class="rounded"><b>select user</b></label>
                          <select class="form-control" id="selectUser" v-model="user_id" >
                            <option v-for="response in info2.response" :value="response.id" >{{response.username}}</option>
                          </select>
                      </div>
                      <div class="form-group">
                            <label for="selectPaymentMethod" class="rounded"><b>select payment method</b></label>
                            <select class="form-control" id="selectPaymentMethod" v-model="paymentMethod_id" >
                              <option v-for="response in info3.response" :value="response.id" >{{response.paymentMethod}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="selectSalaryType" class="rounded"><b>select salaryType</b></label>
                            <select class="form-control" id="selectSalaryType" v-model="salaryType_id" >
                              <option v-for="response in info4.response" :value="response.id" >{{response.name}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="bankName">bank</label>
                            <input type="text" class="form-control" id="bank" placeholder="Enter bank name" v-model="bankName">
                          </div> 
                          <div class="form-group">
                            <label for="phoneNumber">phone number</label>
                            <input type="text" class="form-control" id="phoneNumber" placeholder="Enter phone number" v-model="phoneNumber">
                          </div> 
                        <hr/>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                  </div>
                </div>
          
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
      info: null,
      info2: null,
      info3: null,
      info4: null,
      user_id: null,
      paymentMethod_id:null,
      salaryType_id: null,
      bankName: null,
      phoneNumber: null
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
  },
  methods: {
  processForm: function() {
    
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/addAccount/',
      data: {
        user_id: this.user_id,
        availablePaymentMethod_id: this.paymentMethod_id,
        salaryType_id: this.salaryType_id,
        bankName:this.bankName,
        phoneNumber: this.phoneNumber
      }
    })
    window.location.reload()
    
    
  }
  }
}
</script>

<style>

</style>
