<template>
  <v-navigation-drawer
    v-model="isJobFormActive"
    location="right"
    temporary
    :width="700"
    class="job-panel"
  >
    <v-card :elevation="0" height="40px" text="Add job" class="d-flex">
      <span @click="isJobFormActive = false" class="close-btn">x</span>
    </v-card>
    <v-form v-model="isFormValid" @submit.prevent>
      <v-col cols="14">
        <hr class="divider" />
        <p>Job Type</p>

        <v-btn-toggle v-model="jobType" color="#496968" group>
          <v-btn value="fullTime" rounded="2"> Full Time </v-btn>
          <v-btn value="internShip"> Internship </v-btn>
        </v-btn-toggle>
        <div class="job-form-container">
          <Internship  v-if="jobType === 'internShip'" :formData="formData" :perks="perks" />
          <FullTimeJob v-else-if="jobType === 'fullTime'" :formData="formData" :perks="perks" />
        </div>
      </v-col>
      <v-card :elevation="4" height="50px" class="d-flex flex-row-reverse">
        <v-btn type="submit" class="post-btn form-submit-btn" value="post" color="#455A64" @click="handleSubmit" :disabled="jobType == ''  "> Post Job </v-btn>
        <v-btn class="form-submit-btn" value="cancel" rounded="2" @click="isJobFormActive = false"> Cancel </v-btn>
        <v-snackbar  v-model="snackbar" :timeout = "300" color="#F4FEF2" location="top"  class="snack_pos">
          <div class="flex-center">
              <img class="snack-text-img" src="../assets/success-icon.svg"/>
            <span class="snack_text">{{ snackbarText }}</span>
          </div>
        </v-snackbar>
      </v-card>
    </v-form>
  </v-navigation-drawer>
</template>

<script>
import Internship from "./Internship";
import FullTimeJob from "./FullTimeJob";
import { useFormStore } from "../store/formStore";

export default {
    async setup() {
        const runtimeConfig = useRuntimeConfig();
        const url = runtimeConfig.public.apiBaseUrl + '/api/jobs/perks/';
        const { data: perks } = await useFetch(url);
        console.log("DATA-->",perks.value)
        const store = useFormStore();
        const {isJobFormActive} = storeToRefs(store);
        return {perks,isJobFormActive};                    
    },
    components: {
        Internship,
        FullTimeJob
    },
    data: () => ({
        isFormValid: false,
        jobType: "",
        formData: {
            jobType: "",
            title: "",
            description: "",
            category:"",
            experience: null,
            link: "",
            isPPO: "No",
            otherPerks: [],
            numberOfOpenings: "",
            location:"",
            stipendType: "",
            salaryCurrency:"INR",
            salaryTerm:"/month",
            salary: "",
            contactName: "",
            contactEmail: "",
            workModel: "",
            contactPhone: "",
            duration: 6,
        },
    //timeout: 2000,
    return: {
      snackbar: false,
    },
    }),
    methods: {
        async handleSubmit() {
          if(this.isFormValid === true){
            this.snackbar = true;
            this.snackbarText = "Job posted Successfully!";
            this.isJobFormActive = false;
            this.formData.numberOfOpenings = parseInt(this.formData.numberOfOpenings);
            this.formData.duration = parseInt(this.formData.duration);
            this.formData.jobType = this.jobType;
            console.log("SUBMIT===>", this.formData)
            //const postUrl = runtimeConfig.public.apiBaseUrl + '/api/jobs/postjob/';
            //await $fetch( postUrl, { method: 'POST', body: this.formData } );
          }
        }
    },

};
</script>

<style scoped>
.job-panel {
  top: 0 !important;
}
.v-btn--active {
  color: white;
}
.post-btn {
  color: white !important;
  margin-right: 15px !important;
}
.form-submit-btn {
  margin: 10px 0px;
}
.v-btn-group--density-default.v-btn-group {
  height: 40px !important;
  margin: 10px 0px;
}
p {
  color: rgba(96, 94, 92, 1);
  font-weight: 500;
  font-size: 12px;
}
.divider {
  border: 1px solid rgba(231, 231, 231, 1);
  margin-bottom: 10px;
}
.v-btn {
  border: 1px solid rgba(155, 155, 155, 0.38) !important;
  margin-right: 8px;
  border-radius: 5%;
  text-transform: none;
  font-size: 10px;
  height: 30px !important;
}

.close-btn {
  margin-right: 40px;
  margin-top: 10px;
  color: #707479;
  cursor: pointer;
}
.job-form-container {
  min-height: 31.5rem;
  margin-top: 10px;
}

.snack_pos {
  margin-top: 3rem;
  min-width: 0;
}
.snack_text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #323130;
}

.snack-text-img {
      margin-right: 10px;
    height: 20px;
}

.flex-center {
  display: flex;
    justify-content: center;
}
</style>
