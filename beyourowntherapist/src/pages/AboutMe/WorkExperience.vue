<template>
  <div>
    <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Work Experience</h4>
        <!-- <p class="category">Complete your profile</p> -->
      </md-card-header>
    <md-table>
      <!-- <md-table-toolbar>
        <h1 class="md-title">Users</h1>
      </md-table-toolbar> -->
      <br>
      <md-table-row class="padding-header">
        <!-- <md-table-head md-numeric>ID</md-table-head> -->
        <md-table-head>Name</md-table-head>
        <md-table-head>Email</md-table-head>
        <md-table-head>Gender</md-table-head>
        <md-table-head>Job Title</md-table-head>
      </md-table-row>

      <md-table-row>
        <!-- <md-table-cell md-numeric>1</md-table-cell> -->
        <md-table-cell>Shawna Dubbin</md-table-cell>
        <md-table-cell>sdubbin0@geocities.com</md-table-cell>
        <md-table-cell>Male</md-table-cell>
        <md-table-cell>Assistant Media Planner</md-table-cell>
      </md-table-row>

      <md-table-row>
        <!-- <md-table-cell md-numeric>2</md-table-cell> -->
        <md-table-cell>Odette Demageard</md-table-cell>
        <md-table-cell>odemageard1@spotify.com</md-table-cell>
        <md-table-cell>Female</md-table-cell>
        <md-table-cell>Account Coordinator</md-table-cell>
      </md-table-row>

      <md-table-row>
        <!-- <md-table-cell md-numeric>3</md-table-cell> -->
        <md-table-cell>Vera Taleworth</md-table-cell>
        <md-table-cell>vtaleworth2@google.ca</md-table-cell>
        <md-table-cell>Male</md-table-cell>
        <md-table-cell>Community Outreach Specialist</md-table-cell>
      </md-table-row>
    </md-table>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'TableCard',
    props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
    }
  }
</script>

<style>
md-table-row{
    margin-left: 20px;
}
</style>