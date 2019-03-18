<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#"><router-link :to="{name: 'deductions'}">deductions</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page">users</li>
        </ol>
</nav>
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
            axios.get('http://127.0.0.1:8000/api/internal-deduction-accounts/'+this.$route.params.id+'/')
            .then(response => {
              this.info = {"account": response.data }  
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