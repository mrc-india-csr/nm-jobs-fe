<template>
  <div class="jobs-content">
    <v-card style="max-width:90.5%" elevation="0" height="50px" class="d-flex">
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
      class="elevation-1 color-change"
    >
    <template v-slot:item.status="{ item }">
      <v-chip :color="getColor(item.raw.status)" label>
        {{ item.raw.status }}
      </v-chip>
    </template>
    </v-data-table>
  </div>
</template>

<script>
import { VDataTable } from "vuetify/labs/VDataTable"

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
          class: "blue lighten-5",
        },
        { title: "Type", key: "type" },
        { title: "Experience", key: "experience" },
        { title: "Industry", key: "industry" },
        { title: "Location", key: "location" },
        { title: "Open Positions", key: "openPositions" },
        { title: "Application Received", key: "applicationReceived" },
        { title: "Status", key: "status" },
        { title: "Posted On", key: "postedOn" },
        { title: "Open Until", key: "openUntil" },
        { title: "Contact SPOC", key: "contactSPOC" },
      ],
      jobs: [
        {
          name: "Checking",
          experience: 3,
          industry: 159,
          location: 6.0,
          openPositions: 24,
          applicationReceived: 4.0,
          status:"Open",
          postedOn: Date(Date.now()).toString(),
          openUntil: Date(Date.now()).toString(),
          contactSPOC: "Hari",
        },
      ],
    };
  },
  methods: {
      getColor (status) {
        if (status === "Open") return 'green'
        else if (status === "Close") return 'red'
        else return 'green'
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

.v-data-table {
  overflow-x: auto !important;
}

.color-change {
  overflow-x: auto !important;
  max-width: 100%;

  /* margin: auto */
}

::-webkit-scrollbar {
  height: 0px;              /* height of horizontal scrollbar ← You're missing this */
  width: 0px;               /* width of vertical scrollbar */
  border: 1px solid #d5d5d5;
}
</style>
