<template>
<div>
 <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#"><router-link :to="{name: 'employeeList'}">employee</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page" v-for ="data in info.response">{{ data.username}}</li>
        </ol>
</nav>
{{info}}
</div>
</template>
        
        <script>
        import axios from 'axios'
        export default {
            name: "employeeDetail",
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
            axios.get('http://127.0.0.1:8000/api/user-general-detail/'+this.$route.params.id+'/')
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