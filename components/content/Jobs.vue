<template>
  <div class="jobs-content">
    <v-card elevation="0" height="50px" class="d-flex">
      <h1>Jobs List</h1>
      <v-spacer />
      <v-btn class="btn-font" color="#455A64"> + Add Job </v-btn>
    </v-card>
    <br />

    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="jobs"
      item-value="name"
      show-select
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { VDataTable } from "vuetify/labs/VDataTable";

export default {
  name: "jobs",
  components: {
    VDataTable,
  },
  defaults: {
    VDataTable: {
      
      fixedHeader: true,
      noDataText: "Results not found",
    },
  },

  data() {
    return {
      selected: [],
      headers: [
        {
          title: "Job Title",
          align: "start",
          sortable: true,
          key: "name",
        },
        { title: "Type", key: "type" },
        { title: "Industry", key: "industry" },
        { title: "Location", key: "location" },
        { title: "Open Positions", key: "openPositions" },
        { title: "Application Received", key: "applicationReceived" },
        { title: "Status", key: "status" },
        { title: "Posted On", key: "postedOn" },
        { title: "Open Until", key: "openUntil" },
      ],
      jobs: [
        {
          name: "Checking",
          industry: 159,
          location: 6.0,
          openPositions: 24,
          applicationReceived: 4.0,
          status: 1,
          postedOn: Date(Date.now()).toString(),
          openUntil: Date(Date.now()).toString(),
        },
      ],
    };
  },
};
</script>

<style>
.btn-font {
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}

/* .change-color{
  color:red;
} */
</style>
