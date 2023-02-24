<template>
  <div class="profile-content">
    <v-card class="pa-5">
      <v-card elevation="0" height="50px" class="d-flex">
        <span class="section-header">My Profile</span>
        <v-spacer />
        <v-btn class="profile-edit-btn">
          <v-icon prepend-icon="mdi-vuetify" /> Edit
        </v-btn><br />
      </v-card>
      <hr class="divider" />
      <div class="profile-subSection">
        <span class="profile-form-header">Company Details</span>
        <br /><br />
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">Company Name <span class="req">*</span></p>
          </v-col>
          <v-col>
            <input class="profile-text-field" />
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">Company Description <span class="req">*</span></p>
          </v-col>
          <v-col>
            <input class="profile-text-area" />
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">Sector <span class="req">*</span></p>
          </v-col>
          <v-col>
            <v-select density="compact" class="form-dropdown"></v-select>
          </v-col>
        </v-row><br/>
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">Profile Image <span class="req">*</span></p>
          </v-col>
          <v-col>
              <div class="ellipse">
              <img class ="image"  src="../../assets/company-name.svg"> 
            </div>
        <Profileimage/>
          </v-col>
        </v-row><br/>
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">Location <span class="req">*</span></p>
          </v-col>
          <v-col>
            <div class="location-dropdown">
              <v-select class="form-dropdown marginRight40" density="compact"></v-select>
              <v-select class="form-dropdown marginRight40" density="compact"></v-select>
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
            <p class="profile-field-label">SPOC Name <span class="req">*</span></p>
          </v-col>
          <v-col>
            <input class="profile-text-field" />
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">SPOC E-mail <span class="req">*</span></p>
          </v-col>
          <v-col>
            <input class="profile-text-field" />
          </v-col>
        </v-row>
        <v-row class="form-row">
          <v-col cols="4">
            <p class="profile-field-label">SPOC Number <span class="req">*</span></p>
          </v-col>
          <v-col>
            <input class="profile-text-field" />
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mdiPencilOutline } from '@mdi/js';
import Profileimage from './Profileimage';
  export default {
    name:'profile',
    components:{
    Profileimage,
    },
  }
</script>

<style>
.section-header{
  font-size : 18px;
  font-weight : 600;
}
.profile-form-header{
  font-size : 18px;
  font-weight : 600;
  color: #605E5C;
}
.profile-edit-btn{
  margin : 0 10px !important;
  box-shadow: none;
}
.divider{
    border: 1px solid rgba(231, 231, 231, 1);
    margin-bottom: 10px
}
.form-row{
  width: 55vw;
}
.profile-text-field {
    border: 1px solid rgba(172, 172, 172, 1);
    padding: 12px 8px;
    height: 40px;        
    margin : 5px 0px;
    border-radius: 5px;
    width: 28vw;
}
.profile-field-label{
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
    color: rgba(96, 94, 92, 1);
}
.profile-text-area {
    border: 1px solid rgba(172, 172, 172, 1);
    padding: 12px 8px;
    height:100px;        
    margin : 5px 0px;
    border-radius: 5px;
    width: 32rem;
}
.location-dropdown{
    display: flex;
}
.marginRight40{
    margin-right: 40px !important;
}
.ellipse
{
  position: absolute;
    height: 82px;
    left: 324px;
    right: 1019px;
    top: 430px;
    background: #EAF5F5;
    border-radius: 100%;
}
.image
{
  position: absolute;
    left: 31.34%;
    right: 8.34%;
    top: 31.34%;
    bottom: 12.5%;
}
</style>