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
          </v-col> </v-row
        ><br /><br />
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">
              Profile Image <span class="req">*</span>
            </p>
          </v-col>
          <v-col>
            <div class="ellipse">
              <img class="image" src="../../assets/company-name.svg" />
            </div>
              <Profileimage :handleFileChange="handleFileChange"/>
            <br /> <br />
          </v-col> </v-row>
                  <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">
              Location <span class="req">*</span>
            </p>
          </v-col>
          <v-col>
            <div class="location-dropdown">
              <v-select
                class="form-dropdown marginRight40 v-select"
                density="compact"
                :items="countries"
                ref="location_country"
                variant="solo"
                :value="user.country"
                :disabled="!isEditing"
                :class="{ view: !isEditing }"
                placeholder="Country"
              ></v-select>
              <v-select
                class="form-dropdown marginRight40 v-select"
                density="compact"
                :items="cities"
                ref="location_city"
                variant="solo"
                :value="user.city"
                :disabled="!isEditing"
                :class="{ view: !isEditing }"
                placeholder="City"
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
import { mdiPencilOutline } from "@mdi/js";
import Profileimage from "./Profileimage";
import successIcon from "assets/success-icon.svg";
import cancelIcon from "assets/cancel-icon.svg";

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
    isHandleSubmit: false,
    countries: ["India", "Australia", "China"],
    cities: ["Mumbai", "Chennai", "Kolkata"],
    sectors: [
      "Automotive",
      "IT-ITES",
      "Manufacturing",
      "Banking, Financial Services and Insurance",
      "Logistics",
      "Aerospace & Aviation",
      "Construction",
      "Electronics & Hardware",
      "Leather",
    ],
  }),

  methods: {
        async handleFileChange(file){
            const buffer = await file.arrayBuffer()
            let uintImage = new Uint8Array(buffer);
            var fileByteArray = [];
            for (var i = 0; i < uintImage.length; i++) {
              fileByteArray.push(uintImage[i]);
            }
            this.user.profileImage = fileByteArray;
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
        this.user.country = this.$refs["location_country"].value;
        this.user.city = this.$refs["location_city"].value;
        console.log("User", this.user);

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
  setup() {
    let isEditing = false;
  },
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
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #323130;
  padding-left: 10px;
}

.snack-text-img {
  /* padding-top: 0.4rem;   */

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
  margin-right: 7.5rem;
}
.marginRight40 {
  margin-right: 40px !important;
}
.ellipse {
  position: absolute;
    height: 79px;
    left: 251px;
    right: 774px;
    border-radius: 100%;
    top: 441px;
    background: #EAF5F5;
}
.image {
  position: absolute;
  margin-left: 1.2rem;
  margin-top: 1rem;
  left: 8.34%;
  right: 8.34%;
  top: 12.5%;
  bottom: 12.5%;
}
</style>
