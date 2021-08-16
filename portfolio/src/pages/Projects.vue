<template>
  <div class="content">
    <div class="md-layout">
      <!-- <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="green"> </edit-profile-form>
      </div> -->
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <sat-prep> </sat-prep>
        <byot></byot>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <to-do-list> </to-do-list>
        <git-hub></git-hub>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <tic-tac-toe> </tic-tac-toe>
      </div>
    </div>
  </div>
</template>

<script>
import Byot from './Projects/Byot.vue';
import GitHub from './Projects/GitHub.vue';
import SatPrep from './Projects/SatPrep.vue';
import TicTacToe from './Projects/TicTacToe.vue';
import ToDoList from './Projects/ToDoList.vue';

export default {
  components: {
    SatPrep,
    ToDoList,
    TicTacToe,
    GitHub,
    Byot
  }
};
</script>
