<template>
  <div class="profile-content">
    <v-card class="pa-5">
      <v-card elevation="0" height="50px" class="d-flex">
        <span class="section-header">My Profile</span>
        <v-spacer />
        <v-btn
          class="profile-edit-btn"
          @click="isEditing = !isEditing"
          v-if="!isEditing"
        >
          <img src="../../assets/edit-icon.svg" class="component-icon" />
          Edit
        </v-btn>
        <v-btn
          variant="plain"
          color="#707479"
          v-else-if="isEditing"
          @click="isEditing = false"
        >
          Cancel</v-btn
        >
        <v-btn class="btn-font" v-if="isEditing" @click="save" color="#455A64">
          <img src="../../assets/tick-icon.svg" class="component-icon" />
          Save
        </v-btn>
        <br />
      </v-card>
      <hr class="divider" />
      <div class="profile-subSection">
        <span class="profile-form-header">Company Details</span>
        <br /><br />
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">
              Company Name <span class="req">*</span>
            </p>
          </v-col>
          <v-col>
            <input
              class="profile-text-field"
              ref="company_name"
              :value="user.companyName"
              :disabled="!isEditing"
              :class="{ view: !isEditing }"
            />
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">
              Company Description <span class="req">*</span>
            </p>
          </v-col>
          <v-col cols="8">
            <textarea
              class="profile-text-area"
              ref="company_description"
              :value="user.companyDescription"
              :disabled="!isEditing"
              :class="{ view: !isEditing }"
            >
            </textarea>
            <!-- <input class="profile-text-area" /> -->
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">Sector <span class="req">*</span></p>
          </v-col>
          <v-col>
            <v-select
              density="compact"
              class="form-dropdown v-select"
              :items="sectors"
              ref="company_sector"
              :value="user.sector"
              :disabled="!isEditing"
              :class="{ view: !isEditing }"
              variant="solo"
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">
              Profile Image <span class="req">*</span>
            </p>
          </v-col>
          <v-col>
            <!-- <div class="ellipse">
              <img 
              class ="image"  
              src="../../assets/company-name.svg"> 
            </div> -->
            <Profileimage />
          </v-col> </v-row
        ><br />
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">
              Location <span class="req">*</span>
            </p>
          </v-col>
          <v-col>
            <div class="location-dropdown">
              <v-select
                class="form-dropdown marginRight40"
                density="compact"
              ></v-select>
              <v-select
                class="form-dropdown marginRight40"
                density="compact"
              ></v-select>
            </div>
          </v-col>
        </v-row>
      </div>
      <br /><br />
      <div class="profile-subSection">
        <span class="profile-form-header">SPOC Details</span>
        <br /><br />
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">
              SPOC Name <span class="req">*</span>
            </p>
          </v-col>
          <v-col>
            <input
              class="profile-text-field"
              ref="spoc_name"
              :value="user.contactName"
              :disabled="!isEditing"
              :class="{ view: !isEditing }"
            />
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">
              SPOC E-mail <span class="req">*</span>
            </p>
          </v-col>
          <v-col>
            <input
              class="profile-text-field"
              ref="spoc_email"
              :value="user.contactEmail"
              :disabled="!isEditing"
              :class="{ view: !isEditing }"
            />
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">
              SPOC Number <span class="req">*</span>
            </p>
          </v-col>
          <v-col>
            <input
              class="profile-text-field"
              ref="spoc_number"
              :value="user.contactPhone"
              :disabled="!isEditing"
              :class="{ view: !isEditing }"
            />
          </v-col>
        </v-row>
      </div>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="#F4FEF2"
      location="top"
      class="snack_pos"
    >
      <div class="flex-center">
        <img class="snack-text-img" src="../../assets/success-icon.svg" />
        <span class="snack_text">{{ snackbarText }}</span>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
import { mdiPencilOutline } from "@mdi/js";
import Profileimage from "./Profileimage";
export default {
  name: "profile",
  data: () => ({
    isEditing: false,
    user: {
      companyName: "",
      companyDescription: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      sector: "",
      profileImage: "null",
      country: "",
      city: "",
    },
    snackbar: false,

    sectors: ["Automotive", "IT-ITES", "Manufacturing", "Banking, Financial Services and Insurance", "Logistics", "Aerospace & Aviation", "Construction", "Electronics & Hardware", "Leather"],
  }),
  methods: {
    async save() {
      const runtimeConfig = useRuntimeConfig();
      this.user.companyName = this.$refs["company_name"].value;
      this.user.companyDescription = this.$refs["company_description"].value;
      this.user.contactName = this.$refs["spoc_name"].value;
      this.user.contactEmail = this.$refs["spoc_email"].value;
      this.user.contactPhone = this.$refs["spoc_number"].value;
      this.user.sector = this.$refs["company_sector"].value;
      this.user.country = "India";
      this.user.city = "Chennai";
      this.user.profileImage = "null",
      console.log("User", this.user);

      const postUrl = runtimeConfig.public.apiBaseUrl + '/api/jobs/profile';
        await $fetch(postUrl, {
            method: 'POST',
            body: this.user
        });

      this.isEditing = !this.isEditing;
      this.snackbar = true;
      this.snackbarText = "Profile Successfully Updated!";
      console.log(this.snackbar);
    },
  },
  components: {
    Profileimage,
  },
  setup() {
    let isEditing = false;
  },
};
</script>

<style>

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
  padding-top: 5px;
  margin-right: 2px;
  margin-right: 10px;
  height: 20px;
}

.section-header {
  font-size: 18px;
  font-weight: 600;
}
.component-icon {
  padding-right: 0.3rem;
}

.save-icon {
  color: #455a64;
}

.remove-border {
  padding: 0;
  background-color: white;
}

.view {
  border-color: transparent;
  background-color: #e3e3e3;
  color: initial;
}

.profile-form-header {
  font-size: 18px;
  font-weight: 600;
  color: #605e5c;
}
.profile-edit-btn {
  margin: 0 10px !important;
  box-shadow: none;
}
.divider {
  border: 1px solid rgba(231, 231, 231, 1);
  margin-bottom: 10px;
}
.form-row {
  width: 55vw;
}
.profile-text-field {
  border: 1px solid rgba(172, 172, 172, 1);
  padding: 12px 8px;
  height: 40px;
  margin: 5px 0px;
  border-radius: 5px;
  width: 28vw;
}
.profile-field-label {
  margin-top: 10px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(96, 94, 92, 1);
}
.profile-text-area {
  border: 1px solid rgba(172, 172, 172, 1);
  padding: 12px 8px;
  height: 7.813rem;
  margin: 5px 0px;
  border-radius: 5px;
  width: 36rem;
}

/* height: 125px;
width: 576px;
left: 431px;
top: 307px;
border-radius: 3px; */

.location-dropdown {
  display: flex;
}
.marginRight40 {
  margin-right: 40px !important;
}
.ellipse {
  position: absolute;
  height: 82px;
  left: 324px;
  right: 1019px;
  top: 430px;
  background-color: #496968;
  background: red;
  border-radius: 100%;
}
.image {
  position: sticky;
  /* margin-top: 20px;
  margin-bottom: 10rem; */
  height: 50px;
  left: 31.34%;
  right: 8.34%;
  top: 31.34%;
  bottom: 12.5%;
}


</style>
