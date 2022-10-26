<template>
  <div>
    <nav-bar/>
    <div class="container ">     
        <div class="donate-container">
          <div class="content">
            <h2>Donate</h2>
            <p>For donation, you can use our accounts from different platforms</p>
            <div class="row">
              <div class="col-6">
                <h4>Mobile money</h4>
                <div> +250782047544</div>
                <div>HARINDINTWALI Honore</div>
              </div>
              <div class="col-6">
               <h4>Bank</h4>
                <div> 4490991592 - KCB</div>
                <div>HARINDINTWALI Honore</div>
              </div>
            </div>
          </div>
        </div>  
    </div>
    <footer-component/>
  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import footerComponent from '@/components/footer.vue'
export default {
  name: 'DonatePage',
  components:{
    NavBar,
    footerComponent
  }
}
</script>

<style scoped>
h1, h2, h4{
  margin: 1%;
  color: coral;
}
p{
  font-size: 22px;
}
.rounded-img{
  border-radius: 50%;
  width: 200px;
}
.donate-container{
  margin: auto;
 
}
.content{
  margin: 10% 20%;
  padding: 10px;
  width: 60%;
  height: auto;
  
}

</style>
