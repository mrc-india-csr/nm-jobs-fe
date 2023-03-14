<template>
  <div class="profile-content">
    <v-card class="pa-5">
      <v-card elevation="0" height="3.125rem" class="d-flex">
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
            <input
              class="profile-text-field"
              ref="company_sector"
              :value="user.sector"
              :disabled="!isEditing"
              :class="{ view: !isEditing }"
            />
          </v-col> </v-row
        ><br /><br />
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">
              Profile Image <span class="req">*</span>
            </p>
          </v-col>
          <v-col>
            <!-- <div class="ellipse">
              <img class="image" src="../../assets/company-name.svg" />
            </div> -->
              <Profileimage 
              :handleFileChange="handleFileChange"
              ref="profile_image"
              :value="user.profileImage"
              :disabled="!isEditing"
              :class="{ view: !isEditing }"
              />
            <br /> <br />
          </v-col> </v-row>
                  <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">
              Location <span class="req">*</span>
            </p>
          </v-col>
          <v-col>
            <div>
              <input
                class="profile-text-field country"
                ref="location_country"
                :value="user.locationcountry"
                :disabled="!isEditing"
                :class="{ view: !isEditing }"
                placeholder="Country"
              />
               <input
                class="profile-text-field city"
                ref="location_city"
                :value="user.locationcity"
                :disabled="!isEditing"
                :class="{ view: !isEditing }"
                placeholder="City"
              />
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

      <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        :color="snackColor()"
        location="top"
        class="snack-pos"
      >
        <div class="flex-center">
          <img class="snack-text-img" :src="snackImgSrc()" />
          <span class="snack-text">{{ snackbarText }}</span>
        </div>
      </v-snackbar>
    </v-card>
  </div>
</template>

<script>

import Profileimage from "./Profileimage";
import successIcon from "assets/success-icon.svg";
import cancelIcon from "assets/cancel-icon.svg";

export default {
  name: "profile",
  data: () => ({
    isEditing:false,
    user: {
      companyName: "",
      companyDescription: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      sector: "",
      profileImage: "null",
      locationcountry: "",
      locationcity: "",
    },
    snackbar: false,
    isHandleSubmit: false,

  }),

  methods: {
  setup() {
    console.log('RUnning setup');
    let isEditing = false;
  },
    async save() {
      const runtimeConfig = useRuntimeConfig();
      try {
        this.user.companyName = this.$refs["company_name"].value;
        this.user.companyDescription = this.$refs["company_description"].value;
        this.user.contactName = this.$refs["spoc_name"].value;
        this.user.contactEmail = this.$refs["spoc_email"].value;
        this.user.contactPhone = this.$refs["spoc_number"].value;
        this.user.sector = this.$refs["company_sector"].value;
        this.user.locationcountry = this.$refs["location_country"].value;
        this.user.locationcity = this.$refs["location_city"].value;
        (this.user.profileImage = "null"), console.log("User", this.user);

        const postUrl = runtimeConfig.public.apiBaseUrl + "/api/jobs/profile";
        await $fetch(postUrl, {
          method: "POST",
          body: this.user,
        });

        this.isEditing = !this.isEditing;
        this.snackbar = true;
        this.snackbarText = "Profile Successfully Updated!";
        this.isJobFormActive = true;
      } catch (error) {
        this.snackbar = true;
        this.snackbarText = "Something went wrong. Try again later!";
        this.isJobFormActive = false;
        console.log(error);
      }
    },

    snackImgSrc() {
      return this.isJobFormActive ? successIcon : cancelIcon;
    },

    snackColor() {
      return this.isJobFormActive ? "#F4FEF2" : "#FeF2F2";
    },
  },
  components: {
    Profileimage,
  },
  expose: ['setup'],
};
</script>

<style>
.snack-pos {
  margin-top: 3rem;
  min-width: 0;
}

.snack-text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1875rem;
  letter-spacing: 0.01em;
  color: #323130;
  padding-left: 0.625rem;
}

.snack-text-img {
  /* padding-top: 0.4rem;   */

  height: 1.25rem;
}

.section-header {
  font-size: 1.125rem;
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
  font-size: 1.125rem;
  font-weight: 600;
  color: #605e5c;
}
.profile-edit-btn {
  margin: 0 0.625rem !important;
  box-shadow: none;
}
.divider {
  border: 0.0625rem solid rgba(231, 231, 231, 1);
  margin-bottom: 0.625rem;
}
.form-row {
  width: 55vw;
}
.profile-text-field {
  border: 0.0625rem solid rgba(172, 172, 172, 1);
  padding: 0.75rem 0.5rem;
  height: 2.5rem;
  margin: 0.3125rem 0rem;
  border-radius: 0.3125rem;
  width: 28vw;
}

.country {
  margin-right: 1.3rem;
  width: 15vw;
}
.city{
  margin-right: 1.3rem;
  width: 15vw;
}

.profile-field-label {
  margin-top: 0.625rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(96, 94, 92, 1);
}
.profile-text-area {
  border: 0.0625rem solid rgba(172, 172, 172, 1);
  padding: 0.75rem 0.5rem;
  height: 7.813rem;
  margin: 0.3125rem 0rem;
  border-radius: 0.3125rem;
  width: 36rem;
}


</style>