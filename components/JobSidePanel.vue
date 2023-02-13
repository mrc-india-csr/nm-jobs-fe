<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      location="right"
      temporary
      :width="700"
    >    
      <v-card :elevation="0" height="40px" text="Add job" class="d-flex" ><span @click="drawer = false" class="close-btn">x</span></v-card>
      <v-col  cols="14">
        <hr class="divider"/>
        <p>Job Type</p>
        <v-btn-toggle v-model="jobType" color="#496968" group>
          <v-btn value="fullTime" rounded ="2">
            Full Time
          </v-btn>
          <v-btn value="internShip">
              Internship
          </v-btn>
        </v-btn-toggle>
        <div class="job-form-container">
        <Internship v-if="jobType==='internShip'" />
        </div>
      </v-col>
      <v-card :elevation="4" height="50px" class="d-flex flex-row-reverse">
          <v-btn class="post-btn form-submit-btn" value="post"  color="#455A64">
              Post Job
          </v-btn>
          <v-btn class="form-submit-btn" value="cancel" rounded ="2">
            Cancel
          </v-btn>
      </v-card>
    </v-navigation-drawer>

</template>
<script>
import Internship from './Internship'
  export default {
     components: { Internship },
    data: () => ({
      drawer: true,
      group: null,
      jobType: '',
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
.v-btn--active{      
     color: white;
}
.post-btn{
  color: white !important;
  margin-right : 15px !important;
}
.form-submit-btn{
  margin: 10px 0px;
}
.v-btn-group--density-default.v-btn-group {
    height: 40px !important;
    margin: 10px 0px;
}
p{
  color: rgba(96, 94, 92, 1);
  font-weight: 500;
  font-size: 12px;
}
.divider{
    border: 1px solid rgba(231, 231, 231, 1);
    margin-bottom: 10px
}
.v-btn{
  border: 1px solid rgba(155, 155, 155, 0.38)!important;
  margin-right: 8px;
  border-radius: 5%;
  text-transform: none;
  font-size: 10px;
  height: 30px !important;
}
.close-btn{
    margin-right: 40px;
    margin-top: 10px;
    color: #707479;
    cursor: pointer;
}
.job-form-container{
  min-height : 28rem;
}
</style>