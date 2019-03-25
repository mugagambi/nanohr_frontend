<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">attendance</a></li>
                
                <li class="breadcrumb-item active" aria-current="page">this month</li>
        </ol>
</nav>
{{info}}
<div class="accordion" id="accordionExample" >
        <div class="card" v-for ="data in info.response">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" v-for="data in data">
                {{data.date}}
              </button>
            </h5>
          </div>
      
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
</div>
  

  

  

        </tbody>
      </table>

</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "thisMonth",
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
            axios.get('http://127.0.0.1:8000/api/attendance-list/month/')
            .then(response => {
              this.info = {"response": response.data }  
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