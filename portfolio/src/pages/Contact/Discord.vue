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
        Chat
      </h6>
      <h4 class="card-title">
        Discord
      </h4>
      <p class="card-description">
        Here's another platform where we can connect! <br><br> <b> Discord Username: </b> Navya#7490
      </p>
      <a
        href="https://discord.com/channels/@me"
        target="_blank"
      ><md-button class="md-round md-success">Let's Chat</md-button></a>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "UserCard",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/discord.png")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
