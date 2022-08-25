<template>
  <div>
    <nav-bar/>
    <carousel-component/>
    <text-container :paragraphs="paragraphs"/>
    <footer-component/>
  
  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CarouselComponent from '@/components/carousel.vue'
import textContainer from '@/components/textContainer.vue'
import footerComponent from '@/components/footer.vue'

export default {
  name: 'HomePage',
  data(){
    return {
      paragraphs:[{
        id:1,
        title: "Title1",
        text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
      },{
        id:2,
        title: "Title2",
        text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
      },{
        id:3,
        title: "Title3",
        text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
      }]
    }
  },
  components:{
    NavBar,
    CarouselComponent,
    textContainer,
    footerComponent,
   
  }
}
</script>

<style scoped>

</style>
