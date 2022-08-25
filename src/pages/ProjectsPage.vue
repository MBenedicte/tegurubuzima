<template>
  <div>
    <nav-bar/>

    <div class="container">
      <div>
        <h1> Our projects</h1>
        <div  class="p-2">
          <h3>
            project1
          </h3>
          <p class="p-2">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      <div  class="p-2">
          <h3>
            project2
          </h3>
          <p class="p-2">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      </div>
    <footer-component/>
  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue';
import footerComponent from '@/components/footer.vue'

export default {
  name: 'ProjectsPage',
  components:{
    NavBar,
    footerComponent
  }
}
</script>

<style scoped>
p{
  font-size: 22px;
}
h1{
  color: coral
}

</style>
