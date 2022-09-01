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
          BingeToday
        </h4>
        <p class="card-description">
            It's a YouTube clone made using ReactJS and Rapid API. I have listed some of my favorite channels/categories on the side for easy access. Let me know if you want me to add something else on the easy access!
        </p>
        
        <a
        href="https://voluble-centaur-8a343f.netlify.app/"
        target="_blank"><md-button class="md-round md-success">Check Out</md-button></a>

      <a href="https://github.com/n22arora/youtube-clone" target="_blank"><md-button class="md-round md-success">GitHub Repo</md-button></a>

      </md-card-content>
    </md-card>
  </template>
  <script>
  export default {
    name: "UserCard",
    props: {
      cardUserImage: {
        type: String,
        default: require("@/assets/img/faces/bingetoday.png")
      }
    },
    data() {
      return {};
    }
  };
  </script>
  <style></style>
  