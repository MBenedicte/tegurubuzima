<template>
<div id="carouselExampleIndicators" class="slide carousel m-10" data-bs-ride="carousel" >
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
       
        <div class="carousel-item active ">
            <div class="overlay-image image1" :style="{'background-image': 'url(' + require('@/assets/images/image3.jpg') + ')'}"></div>
            <div class="container">
                <h1>Our vision</h1>
                <p>Tegurubuzima visualize a society where the most vulnerable </p>
                <p>people experience a healthy life and wealth for better development.</p>
                <a href="/donate" class="btn btn-lg oral-bg">Donate</a>
            </div>
           
           
        </div>
        <div class="carousel-item ">
            <div class="overlay-image image2" :style="{'background-image': 'url(' + require('@/assets/images/image2.jpg') + ')'}"> </div>

            <div class="container">
                <h1>Our vision</h1>
                <p>Tegurubuzima visualize a society where the most vulnerable </p>
                <p>people experience a healthy life and wealth for better development.</p>
                <a href="/donate" class="btn btn-lg oral-bg">Donate</a>
            </div>
        </div>
        <div class="carousel-item ">
            <div class="overlay-image image3" :style="{'background-image': 'url(' + require('@/assets/images/image1.jpg') + ')'}"> </div>
            <div class="container">
                <h1>Our vision</h1>
                <p>Tegurubuzima visualize a society where the most vulnerable </p>
                <p>people experience a healthy life and wealth for better development.</p>
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
    height: 47rem;
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
