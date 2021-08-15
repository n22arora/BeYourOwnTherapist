<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Call/Chat</h6>
      <h4 class="card-title">Others</h4>
      <p class="card-description">
          Primary Phone Number: +1(226)-505-9014 <br><br>
          Secondary Phone Number: +91 8439114275 <br><br>
          Email Id: n22arora@uwaterloo.ca
      </p>
      <a href="mailto:n22arora@uwaterloo.ca"><md-button class="md-round md-success">Send Email</md-button></a>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/mailphone.jpg")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
