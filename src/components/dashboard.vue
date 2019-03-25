<template>
<div class = "dashboard">
    <div style="padding:10px 0px" class="row ">
    <div  style="padding:30px 70px " >
        <div class="card border-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">employees</div>
                <div class="card-body text-primary">
                  <h5 class="card-title">Primary card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>  
    </div>
    <div  style="padding:30px 0px " >
            <div class="card border-success mb-3" style="max-width: 18rem;">
                    <div class="card-header">departments</div>
                    <div class="card-body text-success">
                      <h5 class="card-title">Primary card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>  
    </div>
    <div  style="padding:30px 50px " >
            <div class="card border-success mb-3 w-10" style="max-width: 18rem;">
                    <div class="card-header">departments</div>
                    <div class="card-body text-success">
                      <h5 class="card-title">Primary card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>  
    </div>
    </div>      
</div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      info: null
    }
  }

}
</script>

<style>

</style>