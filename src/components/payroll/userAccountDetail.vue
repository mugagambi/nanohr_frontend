<template>
<div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#"><router-link :to="{name: 'accounts'}">Accounts</router-link></a></li>
              <li class="breadcrumb-item active" aria-current="page" v-for=" account in info.account" >{{account.username.username}}</li>
            </ol>
          </nav>

          
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          user bio data
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">user</a>
                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">education</a>
                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">other necessary</a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            {{account}}

                <div class="form-group">
   
               
                </div>
                <div class="form-group" v-for=" account in info.account">
                <p style="padding:5px 20px"><b>username :</b> {{account.username.username}} </p>
                
                <p style="padding:5px 20px"><b>email :</b> {{account.username.email}} </p>
                
            
                
                
                </select>
                </div>

        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"></div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          allowances
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        
              <div class="form-group" >
               <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">allowance</th>
                      <th scope="col">description</th>
                      <th scope="col">amount(Ksh)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for=" account in info3.account ">
                      <td>{{account.salaryAdditionType.additionTypeName}}</td>
                      <td>{{account.description}}</td>
                      <td><b class="text-success"> + {{ numberWithCommas(account.additionAmount)}}</b></td>
                    </tr>
                  </tbody>
                </table>
                
              </div>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">
                + add allowance for this user
              </button>

              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for = "account in info.account">
                <form id="addDeductionForm" @submit.prevent="processForm(account.id)">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header" v-for = "account in info.account">
                      <h5 class="modal-title" id="exampleModalLabel"><b>account Holder : </b>{{account.username.username}}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="exampleFormControlSelect1"><b>select type of allowance</b></label>
                            <select class="form-control" id="exampleFormControlSelect1" v-model= "additionType_id" >
                              <option v-for = "allowance in info5.allowance" :value="allowance.id">{{allowance.additionTypeName}}</option>

                            </select>
                          </div>
                          <div class="form-group">
                              <label for="exampleFormControlInput1"><b>amount</b></label>
                              <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="00" v-model="additionamount">
                          </div>
                          <div class="form-group">
                              <label for="exampleFormControlTextarea1">description</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="additiondescription"></textarea>
                          </div>
                    </div>
                    <div class="modal-footer form-group">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-primary">add allowance</button>
                    </div>
                  </div>
                </div>
              </form>
              </div>

      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          deductions
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
                  
                <div class="form-group" >
                 <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">deduction</th>
                        <th scope="col">description</th>
                        <th scope="col">amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for=" account in info2.account ">
                        <td>{{account.internalDeductionType.deductionName}}</td>
                        <td>{{account.description}}</td>
                        <td><b class="text-danger"> - {{numberWithCommas(account.deductionAmount)}}</b></td>
                      </tr>
                    </tbody>
                  </table>
                  
                </div>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#exampleModal2">
                  + add deduction for this user
                </button>
  
                <!-- Modal -->
                <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for = "account in info.account">
                  <form id="addDeductionForm" @submit.prevent="processForm2(account.id)">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header" v-for = "account in info.account">
                        <h5 class="modal-title" id="exampleModalLabel"><b>account Holder : </b>{{account.username.username}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                          <div class="form-group">
                              <label for="exampleFormControlSelect1"><b>select type of deduction</b></label>
                              <select class="form-control" id="exampleFormControlSelect1" v-model="deductionType">
                                <option v-for = "deduction in info6.deduction" :value="deduction.id">{{deduction.deductionName}}</option>
                              </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1"><b>amount</b></label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="00" v-model="amount">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description"></textarea>
                            </div>
                      </div>
                      <div class="modal-footer form-group">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">add deduction</button>
                      </div>
                    </div>
                  </div>
                </form>
                </div>
      </div>
    </div>
  </div>
    <div class="card">
    <div class="card-header" id="headingFour">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapsefour">
          summary
        </button>
      </h5>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div class="card-body">
          <fieldset disabled>
              <div class="form-group">
              <label for="disabledTextInput"></label>
              <input type="text" id="disabledTextInput" class="form-control" placeholder="">
              </div>
              <div class="form-group" >
               <table class="table table-bordered">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                  
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for=" account in info4.account " v-if="account.commision == 0">
                          <td>basic pay</td>
                          <td><b class=" text-success">{{ numberWithCommas(account.basicpay)}}</b></td>    
                      </t>
                    <tr v-for=" account in info4.account " v-if="account.commision > 0">
                      <td>basic pay</td>
                      <td><b class=" text-success">{{ numberWithCommas(account.basicpay)}}</b></td>    
                    </tr>
                    <tr v-for=" account in info4.account "  v-if="account.commision > 0">
                        <td>commision</td>
                        <td><b class=" text-success">{{ account.commision}}</b></td>    
                    </tr>
                    <tr v-for=" account in info4.account " v-if="account.commision > 0">
                        <td> total sales worth</td>
                        <td><b class=" ">{{ numberWithCommas(account.salesTotalWorth)}}</b></td>    
                    </tr>
                    <tr v-for=" account in info4.account ">
                        <td>total allowances</td>
                        <td><b class=" text-success"> + {{ numberWithCommas(account.allowanceTotal) }}</b></td>    
                    </tr>
                    <tr v-for=" account in info4.account ">
                        <td>total deductions</td>
                        <td><b class=" text-danger"> - {{ numberWithCommas(account.deductionTotal)}}</b></td>    
                    </tr>
                    <tr v-for=" account in info4.account " class="bg-info">
                        <td><b>Net Pay</b></td>
                        <td><b class="">{{numberWithCommas(account.totalPay)}}</b></td>    
                    </tr>
                  </tbody>
                </table>
                
              </div>

              <input type="text" id="disabledTextInput" class="form-control" placeholder="">
             
          </fieldset>
      </div>
    </div>
  </div>
</div>
</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "additionDetail",
        data() {
            return {
            info:  null,
            info2: null,
            info3: null,
            info4: null,
            info5: null,
            info6: null,
            deductionType : '',
            amount : '',
            description : '',
            additionType_id : '',
            additionamount : '',
            additiondescription : '',
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
            axios.get('http://127.0.0.1:8000/api/user-account-detail/'+this.$route.params.id+'/')
            .then(response => {
              this.info = {"account": response.data }  
            
            })
            .catch((err) => {
                console.log(err)
            })
            axios.get('http://127.0.0.1:8000/api/user-salary-deduction-detail/'+this.$route.params.id+'/')
            .then(response => {
              this.info2 = {"account": response.data }  
            
            })
            .catch((err) => {
                console.log(err)
            })
            axios.get('http://127.0.0.1:8000/api/user-salary-addition-detail/'+this.$route.params.id+'/')
            .then(response => {
              this.info3 = {"account": response.data }  
            
            })
            .catch((err) => {
                console.log(err)
            })
            axios.get('http://127.0.0.1:8000/api/user-payment-status-detail/'+this.$route.params.id+'/')
            .then(response => {
              this.info4 = {"account": response.data }  
            
            })
            .catch((err) => {
                console.log(err)
            })
            axios.get('http://127.0.0.1:8000/api/salary-addition-types-list/')
            .then(response => {
              this.info5 = {"allowance": response.data }  
            
            })
            .catch((err) => {
                console.log(err)
            })
            axios.get('http://127.0.0.1:8000/api/internal-deduction-type-list/')
            .then(response => {
              this.info6 = {"deduction": response.data }  
            
            })
            .catch((err) => {
                console.log(err)
            })
            },
            processForm: function(id) {
              console.log(id)
              axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/addAllowance/',
                data: {
                  account_id: id,
                  salaryAdditionType_id: this.additionType_id,
                  amount: this.additionamount,
                  description: this.additiondescription
                }   
              })
              window.location.reload()
              
            
            },
            processForm2: function(id) {
              console.log(id)
              axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/addInternalDeduction/',
                data: {
                  account_id: id,
                  internalDeduction_id: this.deductionType,
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