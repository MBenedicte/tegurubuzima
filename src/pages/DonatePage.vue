<template>
  <div>
    <nav-bar/>
    <div class="container ">     
        <div class="donate-container">
          <div class="content">
            <h2>Donate</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="row">
              <div class="col-6">
                <h4>Momo</h4>
                <div> +736253723943</div>
                <div>John Doe</div>
              </div>
              <div class="col-6">
               <h4>Bank</h4>
                <div> 7354736452773 - KCB</div>
                <div>John Doe</div>
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
