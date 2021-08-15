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
          <to-do-list></to-do-list>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <other> </other>
        <tic-tac-toe></tic-tac-toe>
      </div>
    </div>
  </div>
</template>

<script>
import Discord from './Contact/Discord.vue';
import Linkedin from './Contact/Linkedin.vue';
import Other from './Contact/Other.vue';
import TicTacToe from './Projects/TicTacToe.vue';
import ToDoList from './Projects/ToDoList.vue';

export default {
  components: {
    ToDoList,
    TicTacToe,
    Linkedin,
    Discord,
    Other
  }
};
</script>
