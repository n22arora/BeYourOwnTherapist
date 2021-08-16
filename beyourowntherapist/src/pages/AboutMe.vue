<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <skills data-background-color="green"> </skills>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <profile-card></profile-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <work-experience></work-experience>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <other-experience></other-experience>
      </div>
    </div>
  </div>
</template>

<script>
// import { EditProfileForm, UserCard } from "@/pages";
import Skills from './AboutMe/Skills.vue';
import ProfileCard from './AboutMe/ProfileCard.vue';
import WorkExperience from './AboutMe/WorkExperience.vue';
import OtherExperience from './AboutMe/OtherExperience.vue';

export default {
  components: {
    Skills,
    ProfileCard,
    WorkExperience,
    OtherExperience
  }
};
</script>
