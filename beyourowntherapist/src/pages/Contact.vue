<template>
  <div class="content">
    <div class="md-layout">
      <!-- <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="green"> </edit-profile-form>
      </div> -->
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <linkedin></linkedin>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
          <discord> </discord>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <other> </other>
      </div>
    </div>
  </div>
</template>

<script>
import Discord from './Contact/Discord.vue';
import Linkedin from './Contact/Linkedin.vue';
import Other from './Contact/Other.vue';

export default {
  components: {
    Linkedin,
    Discord,
    Other
  }
};
</script>
