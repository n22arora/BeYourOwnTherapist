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
        Volunteer Work/Project
      </h6>
      <h4 class="card-title">
        SAT | Prep
      </h4>
      <p class="card-description">
        It's an online doubt-solving platform for SAT Aspirants where you can e-mail your doubts to me, and I will reply to you with a solution and its explanation. I am also providing one-on-one sessions if you request one through e-mail.
      </p>
      <a
        href="https://www.thesatprep.com/"
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
      default: require("@/assets/img/faces/satprep.png")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
