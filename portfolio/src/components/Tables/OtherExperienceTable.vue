<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Position">{{ item.position }}</md-table-cell>
        <md-table-cell md-label="Organization">{{ item.organization }}</md-table-cell>
        <md-table-cell md-label="Location">{{ item.location }}</md-table-cell>
        <md-table-cell md-label="Period">{{ item.period }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          position: "Founder",
          period: "May 2021 - Present",
          organization: "SAT | Prep",
          location: "Waterloo, ON"
        },
        {
          position: "Member",
          period: "June 2021 - Present",
          organization: "UW Women in Stem",
          location: "Waterloo, ON"
        },
        {
          position: "Member",
          period: "August 2021 - Present",
          organization: "Midnight Sun Design Team",
          location: "Waterloo, ON"
        }
      ]
    };
  }
};
</script>
