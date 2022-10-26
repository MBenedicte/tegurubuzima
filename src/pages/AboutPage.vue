<template>
  <div>
    <nav-bar/>
    <div class="container">
      <div>
        <h1> Our mission</h1>
      <p class="p-4">
            To pursue health related issues of the most vulnerable people and promote their health
throughout reducing malnutrition, advocating for mentally ill people and early detection of
mental disease in the community, reducing the rate of sexual violence, advocate and help people
living with disabilities for health development according to sustainable development goals.
      </p>
      </div>
      <div >
        <h1> Our staff</h1>
          <div class="col-sm mt-2">
            <div>
              <img src="@/assets/images/founder.jpeg" class="rounded-img" alt="Cinque Terre">
            </div>
            <div>HARINDINTWALI Honore</div>
            <div>hhonore02@gmail.com</div>
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
  border-radius: 10%;
  width: 200px;
}

</style>
