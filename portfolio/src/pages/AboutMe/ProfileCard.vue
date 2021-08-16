<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Student @ University Of Waterloo</h6>
      <h4 class="card-title">Navya Arora</h4>
      <p class="card-description">
        I am an aspiring software developer coupled with experience in software testing. My previous co-ops provided me hands-on experience in a wide array of tools and programming languages which made me passionate about web development.

       <br><br>I would love to talk about my work in detail. I am always looking for opportunities to expand my knowledge in the vast field of software development.

       <br><br>Seeking Winter 2022 opportunities!
      </p>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/aboutmepic2.jpg")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
