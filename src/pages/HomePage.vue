<template>
  <div>
    <nav-bar/>
    <carousel-component/>
  
  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CarouselComponent from '@/components/carousel.vue'
export default {
  name: 'HomePage',
  components:{
    NavBar,
    CarouselComponent
  }
}
</script>

<style scoped>

</style>
