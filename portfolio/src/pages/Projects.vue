<template>
  <div class="content">
    <div class="md-layout">
      <!-- <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="green"> </edit-profile-form>
      </div> -->
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <sat-prep> </sat-prep>
        <hacker-rank></hacker-rank>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <to-do-list> </to-do-list>
        <git-hub></git-hub>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <tic-tac-toe> </tic-tac-toe>
        <!-- <leet-code></leet-code> -->
      </div>
    </div>
  </div>
</template>

<script>
import GitHub from './Projects/GitHub.vue';
import HackerRank from './Projects/HackerRank.vue';
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
    HackerRank
    // LeetCode
  }
};
</script>
