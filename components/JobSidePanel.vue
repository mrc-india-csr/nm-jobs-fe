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
          <Internship v-if="jobType === 'internShip'" />
          <FullTimeJob v-else-if="jobType === 'fullTime'" />
        </div>
      </v-col>
      <v-card :elevation="4" height="50px" class="d-flex flex-row-reverse">
        <v-btn
          type="submit"
          class="post-btn form-submit-btn"
          value="post"
          color="#455A64"
          @click="submitJob"
        >
          Post Job
        </v-btn>
        <!-- :disabled="jobType == ''" //This was there in <v-btn> tag inside the Post Job button -->
        <v-btn
          class="form-submit-btn"
          value="cancel"
          rounded="2"
          @click="isJobFormActive = false"
        >
          Cancel
        </v-btn>
        <!-- Snack bar starts here -->
        <v-snackbar
          v-model="snackbar"
          :timeout = "2000"
          color="#F4FEF2"
          location="top"
          class="snack_pos"
        >
          <div class="align-center">
            <v-icon
              class="snack-text-img"
              icon="mdi-check-decagram"
              style="color: green"
            ></v-icon
            ><span class="snack_text"> {{ snackbarText }}</span>
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
  setup() {
    const store = useFormStore();
    const { isJobFormActive } = storeToRefs(store);
    return {
      isJobFormActive,
    };
  },
  components: {
    Internship,
    FullTimeJob,
  },
  data: () => ({
    isFormValid: false,
    jobType: "",
    timeout: 2000,
    return: {
      snackbar: false,
    },
  }),
  methods: {
    submitJob() {
      // console.log("Hi")
      this.snackbar = true;
      this.snackbarText = "Job posted Successfully!";
      this.isJobFormActive = false;
      
      // // this.snackbar = false
      // setTimeout(() => {
      //   this.snackbar = false
      //   console.log(this.snackbar)
      //   console.log("Hello")
      // }, 2000);

    },
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
  padding-bottom: 0.1rem;
}

.align-center {
  text-align: center;
}
</style>
