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
        To Do List
      </h4>
      <p class="card-description">
        It's an user-friendly traditional to-do list to keep a track of daily activities. It has an option to delete each item of the list at a time or all of them with the ‘clear all’ option. Give it a try by listing out your today's to-dos!
      </p>
      <a
        href="https://www.thesatprep.com/todoindex.html"
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
      default: require("@/assets/img/faces/todolist.png")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
