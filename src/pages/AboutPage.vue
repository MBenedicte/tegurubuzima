<template>
  <div>
    <nav-bar/>
    <div class="container">
      <div>
        <h1> Our mission</h1>
      <p class="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
      </div>
      <div>
        <h1> Our staff</h1>
        <div class="row mb-3">
      <div class="col-sm">
      <div>
        <img src="@/assets/images/GasoreSerge.jpeg" class="rounded-img" alt="Cinque Terre">
      </div>
       <div>John Doe</div>
      <div>john.doe@email.com</div>
      
    </div>
    <div class="col-sm">
      <div>
        <img src="@/assets/images/GasoreSerge.jpeg" class="rounded-img" alt="Cinque Terre">
      </div>
     <div>John Doe</div>
      <div>john.doe@email.com</div>
    </div>
    <div class="col-sm">
      <div>
        <img src="@/assets/images/GasoreSerge.jpeg" class="rounded-img" alt="Cinque Terre">
      </div>
      <div>John Doe</div>
      <div>john.doe@email.com</div>
     
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
  name: 'AboutPage',
  components:{
    NavBar,
    footerComponent
  }
}
</script>

<style scoped>
h1{
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

</style>
