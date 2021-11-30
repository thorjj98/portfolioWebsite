<template>
  <div id="home">
    <div id="sidebar">
      <br>
      <p id="header">Work Experience:</p>
      <a id="web-link">Hobby Lobby</a><br>
      <a id="web-link">The Church of Jesus Christ of Latter-Day Saints</a><br>
      <a id="web-link">Brinton Vision</a><br>
      <a id="web-link">Brigham Young University Risk Management and Safety</a><br>
      <a id="web-link">CS 260 Web Development</a><br>
      <br><hr><br>
      <p id="header">Education:</p>
      <a id="web-link">Lafeyette High School</a><br>
      <a id="web-link">Brigham Young University</a><br>
      <br><hr><br>
      <p id="header">Websites:</p>
      <a href="http://cp1.jjthorley.com/" id="web-link">Assignment - Cray Cray Crayons</a><br>
      <a href="http://lab3.jjthorley.com/" id="web-link">Assignment - XKCD Browser</a><br>
      <a href="http://cr2.jjthorley.com/" id="web-link">Assignment - The Star Wars Guide to Characters</a><br>
      <a href="http://dave.jjthorley.com/" id="web-link">Assignment - Dave's Movie Reviews</a><br>
      <a href="http://motherearth.jjthorley.com/" id="web-link">Assignment - Mother Earth Grocery Store</a><br>
      <a href="http://museum.jjthorley.com/" id="web-link">Assignment - Museum of Ordinary Objects</a><br>
      <a href="http://photobomb.jjthorley.com/" id="web-link">Assignment - Photo Bomb</a><br>
      <a href="http://final.jjthorley.com/" id="web-link">Assignment - Homeless Joe</a><br>
      <br>


    </div>
    <div id="me">
      <h1>Welcome to JJ Thorley's Website</h1>
      <p>This website is a work in progress, but I am uploading it early to allow access to the information I plan to put on it.</p>
      <p>The Resume Page contains a copy of my resume.</p>
      <p>The Websites Page shows more detailed information on my websites in the left sidebar. Most of the websites contain a footer with a link to the github repository.</p>
      <p>The Photos Page contains photos of me.</p>
      <p>For more information feel free to email me at jarod.thorley@gmail.com</p>
    </div>

  </div>
</template>

<script>
  export default {
    created() {
      this.$root.$data.page = "home";
    }
  };
</script>

<style>
  #home{
    display: flex;
    flex-direction: row;
  }
  #sidebar{
    width: 20%;
    background-color: #eeeeee;
    overflow: auto;
    position: sticky;
    top: 10vh;
    height: 90vh;
    border-right: solid 3px #d8d8d8;
  }
  #me {
    width: 80%;
  }
  #header{
    font-size: 20px;
    padding: 10px;
  }
  #web-link {
    text-decoration: none;
    font-size: 17px;
    color: black;
    padding: 10px;
    display:inline-flex;
  }
  #web-link:hover {
    color: #686868;
  }
  p {
    padding: 10px;
  }
  hr {
    height: 3px;
    background-color: #d8d8d8;
    border: none;
  }
  h1 {
    padding: 10px;
  }

</style>
