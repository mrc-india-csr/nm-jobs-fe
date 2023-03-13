<template>
  <div class="jobs-content">
    <v-card style="max-width: 86%" elevation="0" class="d-flex">
      <h1>Jobs List</h1>
      <v-spacer />
      <v-btn class="btn-font" color="#455A64" @click="triggerJobForm()">
        + Add Job
      </v-btn>
    </v-card>
    <br />
    <Vue3EasyDataTable
      v-model:items-selected="itemsSelected"
      :headers="headers"
      :items="items"
      table-class-name="color-change"
      hide-footer
    >

      <template #item-status="{status}">
        <v-chip class="ma-2" label :color="getColor(status)">
          {{status}}
        </v-chip>
      </template>

      <template #item-operation = "item">
      <div>
        <img src = "../../assets/edit-icon.svg" @click = "editItem(item)"/>
        </div>
      </template>

      <!-- <template >

      </template> -->
    </Vue3EasyDataTable>
  </div>
</template>

<script lang="ts">
import type { Header, Item } from "vue3-easy-data-table";
import Vue3EasyDataTable from "vue3-easy-data-table";
import { mdbDatatable } from "mdbvue";
import { ref } from "vue";
import "vue3-easy-data-table/dist/style.css";
import { useFormStore } from "../../store/formStore";

const store = useFormStore();

export default {
  name: "jobs",
  components: {
    Vue3EasyDataTable,
    mdbDatatable,
  },
  async setup() {
    const runtimeConfig = useRuntimeConfig();
    const url = runtimeConfig.public.apiBaseUrl + "/api/jobs/";
    const { data: jobList } = await useFetch(url);
    console.log("JobList",jobList.value.data);
    let jobListJSON = JSON.parse(JSON.stringify(jobList.value.data))
    console.log("JobListJSON " + jobListJSON[0].title)
    const itemsSelected: Item[] = ref([]);
    const items: Item[] = ref([]);
    items.value=Object.values(jobListJSON);

    const headers: Header[] = [
      { text: "Job Title", value: "title" },
      { text: "Type", value: "job_type" },
      { text: "Experience", value: "experience" },
      { text: "Industry", value: "category" },
      { text: "Location", value: "location" },
      { text: "Open Positions", value: "openPositions", width: 100 },
      {
        text: "Application Received",
        value: "applicationReceived",
        width: 100,
      },
      { text: "Status", value: "status"},
      { text: "Posted On", value: "date_posted" },
      { text: "Contact SPOC", value: "posted_by", width: 200 },
      { text: "Open Until", value: "to_date" },
      { text: "Operation", value: "operation" },
    ];
    
    return {
      headers,
      items,
      itemsSelected,
    };
  },
  methods: {
    triggerJobForm() {
      store.isJobFormActive = true;
    },
    getColor(status: string) {
      // console.log("Coming here");
      if (status === "Open") return "green";
      else if (status === "Closed") return "red";
      else return "green";
    },
    getJobType(JobListJSON: any){
      return JobListJSON[0].job_type;
    }
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

.color-change {
  display: block;
  overflow-x: auto;
  white-space: nowrap;

  --easy-table-header-font-size: 10px;
  --easy-table-header-font-color: #605e5c;
  --easy-table-header-background-color: #f4fcfb;
  max-width: 86%;
}

.d-flex {
  font-size: 14px;
  font-weight: 600;
}

::-webkit-scrollbar {
  height: 4px; /* height of horizontal scrollbar ← You're missing this */
  width: 4px; /* width of vertical scrollbar */
  border: 1px solid #d5d5d5;
}
</style>
