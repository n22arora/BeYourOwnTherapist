<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Mental Health</h6>
      <h4 class="card-title">Be Your Own Therapist</h4>
      <p class="card-description">This project focuses on mental health awareness. It is something really close to me. This project is still under progress but you can make use of the items that have been added so far. There is much more to come!
      </p>
      <router-link to="/beyourowntherapist" target="_blank"><md-button class="md-round md-success">Check Out</md-button></router-link>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/Vchat.png")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
