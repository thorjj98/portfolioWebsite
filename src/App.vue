<template>
  <div id="app">
    <div id="carousel">
      <carousel :loop="true" :perPage="1" :autoplay="true" :autoplayTimeout="4000" :paginationEnabled="false">
        <slide>
          <img src="./assets/rice1.jpeg"/>
        </slide>
        <slide>
          <img src="./assets/rice2.jpeg"/>
        </slide>
        <slide>
          <img src="./assets/rice3.jpeg"/>
        </slide>
      </carousel>
    </div>
    <div id="nav">
      <router-link to="/" v-if="home" id="header-item"><span>Home</span></router-link>
      <router-link to="/" v-else id="header-item">Home</router-link>
      <router-link to="/resume" v-if="resume" id="header-item"><span>Resume</span></router-link>
      <router-link to="/resume" v-else id="header-item">Resume</router-link>
      <router-link to="/websites" v-if="websites" id="header-item"><span>Websites</span></router-link>
      <router-link to="/websites" v-else id="header-item">Websites</router-link>
      <router-link to="/photos" v-if="photos" id="header-item"><span>Photos</span></router-link>
      <router-link to="/photos" v-else id="header-item">Photos</router-link>
      <router-link to="/about" v-if="about" id="header-item"><span>About</span></router-link>
      <router-link to="/about" v-else id="header-item">About</router-link>
      
      
      
    </div>
    <router-view />
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
  export default {
    components: {
      Carousel,
      Slide
    },
    computed: {
      page() {
        return this.$root.$data.page;
      },
      home(){
        if (this.page == "home") return true;
        else return false;
      },
      photos(){
        if (this.page == "photos") return true;
        else return false;
      },
      about(){
        if (this.page == "about") return true;
        else return false;
      },
      resume(){
        if (this.page == "resume") return true;
        else return false;
      },
      websites(){
        if (this.page == "websites") return true;
        else return false;
      },
      
    }
  };
</script>

<style>
  * {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

 #nav {
   display: flex;
   justify-content: center;
   background-color:#252323;
   position: sticky;
   width:100%;
   z-index:100;
   top: 0;
   overflow-x: auto;
   overflow-y: hidden;
   height: 10vh;
 }

 img {
   width: 100%;
   height: 25vh;
   object-fit: cover;
   object-position: 0% 10%;
 }

 #header-item {
   text-decoration: none;
   color: #ffffff;
   padding: 2vh;
   font-size: 30px;
 }

 #header-item:hover {
   color:#e4e4e4;
 }

 .VueCarousel-slide{
   height: 25vh;
 }

 span {
   display: inline-block;
   border-bottom: 5px solid white;
 }

</style>
