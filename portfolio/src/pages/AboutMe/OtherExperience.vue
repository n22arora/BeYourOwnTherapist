<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Other Experiences</h4>
          </md-card-header>
          <md-card-content>
            <other-experience-table table-header-color="green"></other-experience-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import OtherExperienceTable from '../../components/Tables/OtherExperienceTable.vue'

export default{
  components: {
    OtherExperienceTable
  }
}
</script>