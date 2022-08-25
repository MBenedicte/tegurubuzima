<template>
<div id="carouselExampleIndicators" class="slide carousel" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
       
        <div class="carousel-item active">
            <div class="overlay-image" :style="{'background-image': 'url(' + require('@/assets/images/mother.jpeg') + ')'}"> </div>
            <div class="container">
                <h1>Example heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="/donate" class="btn btn-lg oral-bg">Donate</a>
            </div>
           
           
        </div>
        <div class="carousel-item ">
            <div class="overlay-image" :style="{'background-image': 'url(' + require('@/assets/images/children.jpeg') + ')'}"> </div>

            <div class="container">
                <h1>Example heading1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="/donate" class="btn btn-lg oral-bg">Donate</a>
            </div>
        </div>
        <div class="carousel-item ">
            <div class="overlay-image" :style="{'background-image': 'url(' + require('@/assets/images/dancing.jpeg') + ')'}"> </div>
            <div class="container">
                <h1>Example heading2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="/donate" class="btn btn-lg oral-bg">Donate</a>
            </div>
        </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>


   

</template>

<script>
export default {
  name: 'CarouselComponent',
  data(){
    return {
        slide1: "./assets/images/children.jpeg"
    }
  },
  methods:{
    getBackGroundImage: function (){
        return {'background-image':'url('+ this.slide1 +')'};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel{
    font-size: 25px;
}
.carousel-item{
    height: 32rem;
    background: #000;
    color: white;
    position: relative;
}
.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 50px;
}
.overlay-image{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-position: center;
    background-size:cover;
    opacity: 0.5;
}
.oral-bg{
    background: coral;
}

</style>
