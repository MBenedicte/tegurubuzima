<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light navContainer">
  <a class="navbar-brand" href="/">
    <img src="../assets/images/logo.jpeg" width="80" height="50" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse right-align" id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item ">
        <a class="nav-link" :class="isActive" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contactus">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>

</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return {
        isActive: ""
    }
  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navContainer{
    padding: 1% ;
    font-size: 20px;
}
.active{
    color: coral !important
}
.right-align{
    margin-left: 65%;
}

</style>
