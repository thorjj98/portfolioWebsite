<template>
  <div class="resume">
      <iframe src="jj_resume.pdf" width="100%" height="1000px" frameborder="0px"></iframe>
  </div>
</template>

<script>
  export default {
    created() {
      this.$root.$data.page = "resume";
    }
  };
</script>