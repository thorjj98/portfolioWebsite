<template>
  <div class="photos">
    <p>This page is not fully implemented and will receive more photos in the future</p>
    <img src="../assets/image.png" id="image"/>
    <img src="../assets/image.png" id="image"/>
    <img src="../assets/image.png" id="image"/>
    <img src="../assets/image.png" id="image"/>
    <img src="../assets/image.png" id="image"/>
    <img src="../assets/image.png" id="image"/>
    <img src="../assets/image.png" id="image"/>
    <img src="../assets/image.png" id="image"/>
    <img src="../assets/image.png" id="image"/>
    <img src="../assets/image.png" id="image"/>
    <img src="../assets/image.png" id="image"/>
    <img src="../assets/image.png" id="image"/>
  </div>
</template>

<script>
  export default {
    created() {
      this.$root.$data.page = "photos";
    }
  };
</script>

<style scoped>
#image {
  width: 20%;
  margin: 2.5%;
}
</style>
