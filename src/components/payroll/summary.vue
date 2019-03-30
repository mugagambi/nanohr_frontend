<template>
        <div class = "summary">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item active" aria-current="page">payment status summary</li>
                    </ol>
                  </nav>
                  <div style="padding:15px 5px">
                      <p>
                          <a class="btn btn-primary" data-toggle="collapse" href="#collapseDraft" role="button" aria-expanded="false" aria-controls="collapseCheckIn">
                            draft account(s)
                          </a>
                        </p>
                        <div class="row">
                        <div class="collapse col-4 " id="collapseDraft">
                          <div class="card card-body">
                            <form id="checkIn"  @submit.prevent="processForm()">
                              <div class="form-group">
                                  <label for="exampleFormControlSelect1" class="rounded"><b>select user(s)</b></label>
                                  <select multiple class=" form-control" id="exampleFormControlSelect1" v-model="account_id" >
                                    <option v-for="response in info2.account" :value="response.id" >{{response.username.username}}</option>
                                  </select>
                                </div>
                                <hr/>
                                <button type="submit" class="btn btn-primary">draft</button>
                              </form>
                          </div>
                        </div>
                        </div>
                  </div>
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
                <td>{{ numberWithCommas(summary.basicpay)}}</td>
                <td class="text-primary">{{ numberWithCommas(summary.salesTotalWorth)}}</td>
                <td>{{ summary.commision}} %</td>
                <td class="text-success">+{{ summary.allowanceTotal}}</td>
                <td class="text-danger"> -{{ numberWithCommas(summary.deductionTotal)}}</td>
                <td><b class="text-success">{{ numberWithCommas(summary.totalPay)}}</b></td>
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
              info: null,
              info2: null,
              account_id: null
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
            axios.get(`http://127.0.0.1:8000/api/accounts-list/`)
            .then(response => {
            this.info2 = {"account": response.data }
            })
          },
          methods: {
          numberWithCommas: function(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
          processForm: function() {
            for (var data in this.account_id)
                axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/draft/',
                data: {
                  account_id: this.account_id[data] 
                                    
                }
              })
              window.location.reload()
            }
          }
        }
        </script>
        
        <style>
        
        </style>