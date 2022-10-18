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
          Cooking Book
        </h4>
        <p class="card-description">
            It's an online Cooking Book with several recipes that are loved by me and my family members. It's an initiative to preserve the recipes brought to me by my grandparents so I can hold onto them for generations to come. Feel free to add your favorite recipes to it and do try out the ones already there!
        </p>
        
        <a
        href="https://serene-begonia-e3bb6e.netlify.app/"
        target="_blank"><md-button class="md-round md-success">Check Out</md-button></a>

      <a href="https://github.com/n22arora/cookingbook" target="_blank"><md-button class="md-round md-success">GitHub Repo</md-button></a>

      </md-card-content>
    </md-card>
  </template>
  <script>
  export default {
    name: "UserCard",
    props: {
      cardUserImage: {
        type: String,
        default: require("@/assets/img/faces/cookingbook.png")
      }
    },
    data() {
      return {};
    }
  };
  </script>
  <style></style>
  