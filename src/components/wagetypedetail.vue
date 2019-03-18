<template>
<div>
    
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#"><router-link :to="{name: 'wagetypes'}">wage types</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page">users</li>
        </ol>
</nav>
<table class="table table-hover table-responsive-sm table-responsive-md">
        <thead class="thead-dark">
        <tr>
          <th >username</th>
          <th >preffered </br>payment</br> method</th>
          <th >type of salary</th>
          <th >bankname</th>
          <th >action</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for = "account in info.account">
          <td>{{ account.username.username }}</td>
          <td>{{ account.prefferedPaymentMethod.paymentMethod}}</td>
          <td>{{ account.salaryType.name}}</td>
          <td>{{ account.bankName}}</td>
          <td>
            <a href="#" ><router-link :to="`/userAccountDetail/` + account.id + `/`"><img src="@/assets/Data-View-Details-icon.png"></router-link></a>
            </td>
        </tr>
      </tbody>
    </table>
</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "wagetypeDetail",
        data() {
            return {
            info: null
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
            axios.get('http://127.0.0.1:8000/api/salary-type-accounts/'+this.$route.params.id+'/')
            .then(response => {
              this.info = {"account": response.data }  
                console.log(resp)
            })
            .catch((err) => {
                console.log(err)
            })
            }
        }
        }
        </script>
        
        <style>
        
        </style>