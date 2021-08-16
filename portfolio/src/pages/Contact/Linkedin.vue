<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Profile</h6>
      <h4 class="card-title">LinkedIn</h4>
      <p class="card-description">Here's another detailed portfolio of mine. Check out my work experiences during previous co-ops, certifications, summary of skills, etc. Feel free to connect with me!
      </p>
      <a href="https://www.linkedin.com/in/n22arora/" target="_blank"><md-button class="md-round md-success">Let's Connect</md-button></a>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/linkedin.png")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
