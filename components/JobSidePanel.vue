<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      location="right"
      temporary
    >
      <v-card :elevation="0" height="40px" text="Add job"></v-card>
      <v-col  cols="14">
        <hr class="divider"/>
        <p>Job Type</p>
        <v-btn-toggle v-model="text" color="#496968" group>
          <v-btn value="fullTime" rounded ="2">
            Full Time
          </v-btn>
          <v-btn value="internShip">
              Internship
          </v-btn>
        </v-btn-toggle>
        <Internship />
      </v-col>
    </v-navigation-drawer>
</template>
<script>
import Internship from './Internship'
  export default {
     components: { Internship },
    data: () => ({
      drawer: true,
      group: null,
       text: 'center',
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
.v-navigation-drawer{
  width: 400px
}
.v-btn--active{      
     color: white;
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

</style>
