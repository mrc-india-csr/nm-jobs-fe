<template>
  <div class="jobs-content">
    <v-card style="max-width:90.5%" elevation="0" height="50px" class="d-flex">
      <h1>Jobs List</h1>
      <v-spacer />
      <v-btn class="btn-font" color="#455A64" @click="triggerJobForm()"> + Add Job </v-btn>
    </v-card>
    <br />
    
    <Vue3EasyDataTable
    v-model:items-selected="itemsSelected"
    :headers="headers"
    :items="items"
    table-class-name="color-change"
    />
  </div>
</template>

<script lang="ts">
import type { Header, Item } from "vue3-easy-data-table";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import { mdbDatatable } from 'mdbvue';
import {ref} from "vue";
import 'vue3-easy-data-table/dist/style.css';
import { useFormStore } from "../../store/formStore";
const store = useFormStore();

export default {
  name: "jobs",
  components:{
    Vue3EasyDataTable,
    mdbDatatable,
  },
  methods: {
    triggerJobForm() {
      store.isJobFormActive = true;
    },
  }, 
  setup(){
    const itemsSelected: Item[] = ref([]);
      const headers : Header[]=[
        { text: "Job Title", value: "jobtitle"},
        { text: "Type", value: "type" },
        { text: "Experience", value: "experience" },
        { text: "Industry", value: "industry" },
        { text: "Location", value: "location" },
        { text: "Open Positions", value: "openPositions" , width:100},
        { text: "Application Received", value: "applicationReceived" , width:100},
        { text: "Status", value: "statusvalue" },
        { text: "Posted On", value: "postedOn" },
        { text: "Open Until", value: "openUntil" },
        { text: "Contact SPOC", value: "contactSPOC" , width:200},
      ];
      const items : Item[]=[
      {
        jobtitle:"HR Executive",
        type:"Internship",
        experience:3,
        industry:"Manufacturing",
        location:"Chennai",
        openPositions:10,
        applicationReceived:5,
        statusvalue:"open",
        postedOn: Date(Date.now()).toString(),
        openUntil:Date(Date.now()).toString(),
        contactSPOC:"Hari"
      },
      {
        jobtitle:"HR Executive",
        type:"Internship",
        experience:3,
        industry:"Manufacturing",
        location:"Chennai",
        openPositions:10,
        applicationReceived:5,
        statusvalue:"open",
        postedOn: Date(Date.now()).toString(),
        openUntil:Date(Date.now()).toString(),
        contactSPOC:"Hari"
      },
    ];
      return{
        headers,
        items,
        itemsSelected,
      };
    }
  }


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
  overflow-x: auto;
  --easy-table-header-font-size: 10px;
  --easy-table-header-font-color: #605E5C;
  --easy-table-header-background-color:#F4FCFB;
}
::-webkit-scrollbar {
  height: 0px; /* height of horizontal scrollbar ← You're missing this */
  width: 0px; /* width of vertical scrollbar */
  border: 1px solid #d5d5d5;
}


</style>
