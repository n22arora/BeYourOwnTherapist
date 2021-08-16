<template>
  <div class="content">
    <div class="md-layout">
      <!-- <div class="md-layout-item md-medium-size-100 md-size-33">
        <profile-card></profile-card>
      </div> -->
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <skills data-background-color="green"></skills>
      </div>
      <!-- <div class="md-layout-item md-medium-size-100 md-size-100">
        <work-experience></work-experience>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <other-experience></other-experience>
      </div> -->
    </div>
  </div>
</template>

<script>
import Skills from './BeYourOwnTherapist/Skills.vue';

export default {
  components: {
    Skills
  }
};
</script>
