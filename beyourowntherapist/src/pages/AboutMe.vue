<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <work-experience data-background-color="green"> </work-experience>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <profile-card></profile-card>
      </div>
    </div>
  </div>
</template>

<script>
// import { EditProfileForm, UserCard } from "@/pages";
import WorkExperience from './AboutMe/WorkExperience.vue';
import ProfileCard from './AboutMe/ProfileCard.vue';

export default {
  components: {
    WorkExperience,
    ProfileCard
  }
};
</script>
