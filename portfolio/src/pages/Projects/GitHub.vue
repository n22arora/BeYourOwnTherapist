<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img
        class="img"
        :src="cardUserImage"
      >
    </div>

    <md-card-content>
      <h6 class="category text-gray">
        GitHub
      </h6>
      <h4 class="card-title">
        Other Projects
      </h4>
      <p class="card-description">
        Check out my GitHub account for more interesting projects! 
      </p>
      <a
        href="https://github.com/n22arora"
        target="_blank"
      ><md-button class="md-round md-success">Check Out</md-button></a>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "UserCard",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/github.png")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
