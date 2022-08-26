<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Utility</h6>
      <h4 class="card-title">VChat</h4>
      <p class="card-description">It's an online texting application made using Stream API. It's pretty similar to discord/slack where you can DM or create channels for different purposes. It's deployment is under progress. In the meantime, you can checkout its code on my GitHub profile.
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
