<template>
  <div class="websites">
    <h1>Websites:</h1>
      <h1><a href="http://cp1.jjthorley.com/" id="web-link">Assignment - Cray Cray Crayons</a><br></h1>
      <p id="website-description">Cray Cray Crayons was a basic project done using only html and css. I created a whacky idea and worked together with a partner to make the basic layout. </p>
      <h1><a href="http://lab3.jjthorley.com/" id="web-link">Assignment - XKCD Browser</a><br></h1>
      <p id="website-description">This is my first Vue project. It calls an instance of Vue and downloads XKCD comics using an API. Vue is then used to navigate between the comics and to store ratings and comments. </p>
      <h1><a href="http://cr2.jjthorley.com/" id="web-link">Assignment - The Star Wars Guide to Characters</a><br></h1>
      <p id="website-description">Here is another website utilizing Vue and an api to pull information on various Star Wars Characters.</p>
      <h1><a href="http://dave.jjthorley.com/" id="web-link">Assignment - Dave's Movie Reviews</a><br></h1>
      <p id="website-description">Dave's Movie Reviews uses a the Vue CLI and a set of dummy data to display various movied in a grid. Users are able to add movies to a list of their favorites and to pull up information of each individual movie. </p>
      <h1><a href="http://motherearth.jjthorley.com/" id="web-link">Assignment - Mother Earth Grocery Store</a><br></h1>
      <p id="website-description">The Mother Earth Grocery Store is a website that uses the Vue CLI similarly to Dave's Movie Reviews to display various products and let users add them to their cart. The products can be searched with a search bar or filtered by their nation of origin. </p>
      <h1><a href="http://museum.jjthorley.com/" id="web-link">Assignment - Museum of Ordinary Objects</a><br></h1>
      <p id="website-description">The Museum of Ordinary Objects utilizes a Vue CLI as well as a Mongo DB backend to let admins upload photos with a title and description. Photos can also be edited and deleted. </p>
      <h1><a href="http://photobomb.jjthorley.com/" id="web-link">Assignment - Photo Bomb</a><br></h1>
      <p id="website-description">This website similarly allows users to upload, edit, and delete photos, but implements login and registration functionality. This site again uses the Vue CLI as well as Mongo DB and Express. </p>
      <h1><a href="http://final.jjthorley.com/" id="web-link">Assignment - Homeless Joe</a><br></h1>
      <p id="website-description">Homeless Joe is a creative assignment that I made from scratch with a partner. It is designed to display information on real estate and implements login and registration functionality with Mongo DB and Express. </p>
  </div>
</template>

<script>
  export default {
    created() {
      this.$root.$data.page = "websites";
    }
  };
</script>

<style>
  h1 {
    padding: 10px;
  }
  #website-description {
    margin-left: 20px;
  }
</style>