<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">leaves</a></li>
                
                <li class="breadcrumb-item active" aria-current="page">types</li>
        </ol>
</nav>
<div style="padding:15px 5px">
        <button type="button" class="btn btn-primary">+ add</button>
    </div>
<ul class="list-group" v-for = "data in info.types">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {{data.leaveType}}
          <span class="badge badge-primary badge-pill">number</span>
        </li>
</ul>

</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "types",
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
            axios.get('http://127.0.0.1:8000/api/leave-types/')
            .then(response => {
              this.info = {"types": response.data }  
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