<template>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h3 class="title">About the Project</h3>
        <!-- <p class="category">Complete your profile</p> -->
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
              <h5 class="category" align="center">This project focuses on maintaining good mental health for those who are going through tough phases in their life. Sometimes, the best way to deal with a tough situation is to evaluate it in pieces. By evaluate, I mean break it down into pieces and then deal with it. It looks so cumbersome all together but when you take one piece at a time, you come out of that situation really quick!</h5><br>
              <!-- <h5 class="category" align="center">There is a super amazing flow chart that you should take a look into</h5> -->
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50" >
                <h5 class="category" align="center">There is a super amazing flow chart that you should take a look into:</h5>
                <img class="img" :src="cardUserImage" />
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50" >
                <h5 class="category" align="center"><b>Section in progress </b> <br>I am also preparing a questionnaire including some general questions that may help you break your problems down into separate pieces:</h5>
                <div class="md-layout-item md-small-size-100 md-size-100" align="center"><br><br>
                <a href="https://www.thesatprep.com/" target="_blank"><md-button class="md-round md-success" :disabled="true">Check Out</md-button></a>
                </div>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-66">
              <h5>Tools/Frameworks</h5>
              <p class="category">Vue.js, TypeScript, Bootstrap 3/4, PostgreSQL, Jira, Jenkins, Postman, Tosca Commander, Git, Netlify, REST API, Netlify, GitHub</p>
          </div> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-100">
              <h5>Other Skills</h5>
              <p class="category">
                  <ul>
                      <li>Problem-Solver</li>
                      <li>Quick Self-Learner</li>
                      <li>Meet deadlines</li>
                      <li>Effective Communication</li>
                      <li>Hard Worker</li>
                      <li>Time Management</li>
                  </ul>
              </p>
          </div> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-66">
              <h5>Certifications</h5>
              <p class="category">
                  <ul>
                      <li>CBSE Certificate of Merit for Physics - Awarded to top 0.1% of candidates passing that subject</li>
                      <li>TypeScript Fundamentals - Coursera</li>
                      <li>CSS Certification - HackerRank</li>
                      <li>Game Development - Codecademy</li>
                      <li>Tosca Automation Specialist Level 1 - Tricentis</li>
                      <li>Tosca Automation Specialist Level 2 - Tricentis</li>
                  </ul>
              </p>
          </div> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="lastname" type="text"></md-input>
            </md-field>
          </div> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adress</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>City</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Postal Code</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>About Me</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Update Profile</md-button>
          </div> -->
        </div>
      </md-card-content>
    </md-card>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    },
    cardUserImage: {
      type: String,
      default: require("@/assets/img/flowchartproject.png")
    }
  },
  data() {
    return {
    };
  }
};
</script>
<style>
.size{
  width: 100px;
  height: 100px;
}
</style>
