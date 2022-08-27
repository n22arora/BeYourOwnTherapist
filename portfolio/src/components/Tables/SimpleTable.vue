<template>
  <div>
    <md-table
      v-model="users"
      :table-header-color="tableHeaderColor"
    >
      <md-table-row
        slot="md-table-row"
        slot-scope="{ item }"
      >
        <md-table-cell md-label="Position">
          {{ item.position }}
        </md-table-cell>
        <md-table-cell md-label="Company">
          {{ item.company }}
        </md-table-cell>
        <md-table-cell md-label="Location">
          {{ item.location }}
        </md-table-cell>
        <md-table-cell md-label="Period">
          {{ item.period }}
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "SimpleTable",
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
          position: "Software Developer",
          period: "January 2022 - May 2022",
          company: "OpenText Inc",
          location: "Waterloo, ON"
        },
        {
          position: "Software Developer",
          period: "May 2021 - August 2021",
          company: "Weavik Inc",
          location: "Waterloo, ON"
        },
        {
          position: "Test Analyst",
          period: "September 2020 - December 2020",
          company: "Economical Insurance",
          location: "Kitchener, ON"
        },
        {
          position: "Test Analyst",
          period: "January 2020 - April 2020",
          company: "Toronto Transit Commission",
          location: "Toronto, ON"
        }
      ]
    };
  }
};
</script>
