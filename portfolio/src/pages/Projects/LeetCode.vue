<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Coding Platform</h6>
      <h4 class="card-title">LeetCode</h4>
      <p class="card-description">Check out my LeetCode Profile to know more! 
      </p>
      <a href="https://leetcode.com/n22arora/" target="_blank"><md-button class="md-round md-success">Check Out</md-button></a>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/leetcode.png")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
