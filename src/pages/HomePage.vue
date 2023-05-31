<template>
  <div>
    <nav-bar/>
    <carousel-component />
    <text-container id="container" :paragraphs="paragraphs"/>
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
        title: "Our history",
        text:`Tegurubuzima Organization has started in the beginning of 2020 as an association of people
living with disabilities in terms of advocating for their rights and self-development.
As the time pass, the founder discovered other gaps in the health development toward other types
of vulnerable person and projected the plans to expand the way of advocacy and implementing
activities that should raise up the wide range of those people.
The organization enlarged their activities toward advocating depressed people in order to prevent
suicides cases that are increasing in the society as well as advocating for other mentally ill
persons, preventing sexual violence and providing help to those ones who were violated, Helping
and preventing malnutrition among children for the purpose of eliminating stunting in Rwanda.
Today, the organization is implementing some activities and visualizes also carrying out more
projects concerning vulnerable people for the better h ealth and self-development by referring to
the sustainable development goals of Rwanda as well as World Health Organization.`
      },]
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
