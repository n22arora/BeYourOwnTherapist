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
        Game
      </h6>
      <h4 class="card-title">
        Tic Tac Toe
      </h4>
      <p class="card-description">
        It's the old game of tic tac toe which I made when I was learning CSS. That's why you will find it out a little colorful as I was experimenting with gradient and stuff while making this. Do check it out and let me know if you win!
      </p>
      <a
        href="https://nostalgic-torvalds-9116f5.netlify.app/"
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
      default: require("@/assets/img/faces/tictactoe.png")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
