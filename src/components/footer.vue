<template>
<div class="text">
    <div class="p-3 bg-light">
  <div class="row">
    <div class="col-sm-4 text-left p-2" >
        <h3>Contact us</h3>
        <div class="p-1"><i class="bi bi-telephone"></i> <span>: phone number</span></div>
        <div class="p-1"><i class="bi bi-envelope-paper"></i> <span>: email</span></div>
      
    </div>
    <div class="col-sm-4  p-2 border-lr">  
        <h3>Our Links</h3>
        <div class="p-1"> <a href="/about"> About us</a></div>
        <div class="p-1"> <a href="/contactus"> Contact us</a></div>  
    </div>
    <div class="col-sm-4 p-2">
        <h3>Follow us</h3>
       <div class="p-1"><i class="bi bi-twitter"></i> <span>: Twitter  </span></div>
        <div class="p-1"><i class="bi bi-instagram"></i> <span>: Instagram</span></div>
        <div class="p-1"><i class="bi bi-facebook"></i> <span>: Facebook</span></div>
      
    </div>
  </div>
  <p class="copyright p-1">Copyright@2022</p>
</div>

</div>
    
</template>
<script>
export default {
    name: "FooterComponent",
    data(){
        return {}
    }
}

</script>
<style scoped>

.gray-bg{
    background-color: rgb(56, 56, 56);
}
.black-bg{
    background-color: rgb(1, 1, 1);
}


.text{
    color: rgb(31, 31, 31);
}
.border-lr{
    border-right: 1px solid rgb(187, 186, 186);
    border-left: 1px solid rgb(187, 186, 186);
}
.copyright{
    font-size: 18px;
}
a{
    text-decoration: none;
      color: rgb(31, 31, 31);
     font-size: 16px;
}
</style>
