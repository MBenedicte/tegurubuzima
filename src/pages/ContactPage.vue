<template>
  <div>
    <nav-bar/>
    <div class="container m-4">
      <div class="row">
  <div class="col-10">
    <div class="form-container">
      <div class="center">
          <h1 >Contact us</h1>
      <p> Please send us your thoughts</p>
      </div>
      
      </div>
      <div class="form-div">
        <form>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label align-l">Your name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe">
</div>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div> <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Subject</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your subject">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>    
  </div>
  <div class="col-2 marge">
    <div v-for="address in addresses" :key="address">
      <div class="address-tittle">{{address.title}}</div>
      <p>{{address.add}}</p>
    </div>
     
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
  name: 'ContactPage',
  components:{
    NavBar,
    footerComponent

  },
  data(){
return{
  addresses:[
    {title: 'Phone number', add:'+24536173673'},
    {title: 'Email', add:'email@email.com' },
    {title: 'Instagram', add:'instagram',},
    {title: 'Address', add:'address 23113, stress avenue, house number',}
    
    ]
}
  }
}
</script>

<style scoped>
.form-div{
  width: 60%;
  margin: auto;
 
}
.align-l{
  text-align: left !important;
}
h1{
  color: coral
}
.marge{
  margin-top: 9%;
  text-align: left;
}
.address-tittle{
  color: coral
}


</style>
