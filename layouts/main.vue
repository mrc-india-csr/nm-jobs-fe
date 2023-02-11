<template>
  <v-app>
   <Header/>
   <Sidenav/>
   <JobSidePanel/>
  </v-app>
</template>
<script>
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import JobSidePanel from '../components/JobSidePanel';

export default{
  name:'mains',
  components:{
    Header,
    Sidenav,
    JobSidePanel
  }
}
</script>
<style>
</style>


