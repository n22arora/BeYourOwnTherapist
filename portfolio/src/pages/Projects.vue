<template>
  <div class="content">
    <div class="md-layout">
      <!-- <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="green"> </edit-profile-form>
      </div> -->
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <vchat />
        <sat-prep />
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <to-do-list />
        <git-hub />
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <tic-tac-toe />
        <byot />
        <!-- <hacker-rank></hacker-rank> -->
        <!-- <leet-code></leet-code> -->
      </div>
    </div>
  </div>
</template>

<script>
import Vchat from './Projects/Vchat.vue'
import Byot from './Projects/Byot.vue';
import GitHub from './Projects/GitHub.vue';
// import HackerRank from './Projects/HackerRank.vue';
// import LeetCode from './Projects/LeetCode.vue';
import SatPrep from './Projects/SatPrep.vue';
import TicTacToe from './Projects/TicTacToe.vue';
import ToDoList from './Projects/ToDoList.vue';

export default {
  components: {
    SatPrep,
    ToDoList,
    TicTacToe,
    GitHub,
    // HackerRank,
    Vchat,
    Byot
  }
};
</script>
