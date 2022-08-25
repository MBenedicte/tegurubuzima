<template>
  
<div class="container" v-for="paragraph in paragraphs" :key="paragraph.id">
  <h1>{{paragraph.title}}</h1>
  <p>{{paragraph.text}}</p>
</div>

</template>

<script>
export default {
  name: 'textContainer',
  props:{
    paragraphs: Array
  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 2%;
  width: 70%;
  font-size: 25px;
  margin-bottom: 5%;
}
h1{
  margin: 1%;
  color: coral;
}
p{
  margin-top: 20px;
}


</style>
