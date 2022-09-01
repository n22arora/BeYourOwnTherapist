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
          Utility
        </h6>
        <h4 class="card-title">
          Alan News AI
        </h4>
        <p class="card-description">
          It's a News Application which makes use of AI for taking commands from the user. You can try several commands like "Give me the latest Techonology News", "What's up with Playstation 5?", "Give me the News from CNN"
        </p>

        <a
        href="https://lustrous-horse-a5a041.netlify.app/"
        target="_blank"><md-button class="md-round md-success">Check Out</md-button></a>

      <a href="https://github.com/n22arora/speech-recognition-news" target="_blank"><md-button class="md-round md-success">GitHub Repo</md-button></a>

      </md-card-content>
    </md-card>
  </template>
  <script>
  export default {
    name: "UserCard",
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
  