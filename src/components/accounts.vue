<template>
<div class = "accounts">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Accounts</li>
            </ol>
          </nav>
  
  <table class="table table-hover table-responsive">
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
      info: null
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
  }
}
</script>

<style>

</style>
