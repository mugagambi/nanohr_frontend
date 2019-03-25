<template>
        <div class = "summary">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item active" aria-current="page">payment status summary</li>
                    </ol>
                  </nav>
          <table class="table table-hover table-responsive">
            <thead class="thead-dark">
              <tr>
                <th >username</th>
                <th >basic pay</th>
                <th >sales total worth</th>
                <th >commision %age</th>
                <th >total allowances</th>
                <th >total Deductions</th>
                <th>total pay</th>
                <th></th>
              </tr>
            </thead>
            
            <tbody>
              <tr v-for = "summary in info.summary">
                <td><a href="#" ><router-link :to="`/userAccountDetail/` + summary.account.id + `/`">{{ summary.account.username.username }}</router-link></a></td>
                <td>{{ summary.basicpay}}</td>
                <td class="text-primary">{{ summary.salesTotalWorth}}</td>
                <td>{{ summary.commision}} %</td>
                <td class="text-success">+{{ summary.allowanceTotal}}</td>
                <td class="text-danger"> -{{ summary.deductionTotal}}</td>
                <td><b class="text-success">{{ summary.totalPay}}</b></td>
                <td><button type="button" class="btn btn-primary">edit</button></td>
               
              </tr>
            </tbody>
          </table>
        </div>
        </template>
        
        <script>
        import axios from 'axios'
        export default {
          name: 'summary',
          data () {
            return {
              info: null
            }
          },
          created() {
            axios.get(`http://127.0.0.1:8000/api/payment-status-list/`)
            .then(response => {
              this.info = {"summary": response.data }
            })
            .catch(e => {
              this.errors.push(e)
            })
          }
        }
        </script>
        
        <style>
        
        </style>