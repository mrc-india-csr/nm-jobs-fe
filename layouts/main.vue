<template>
  <v-app id="app">
   <Header/>
   <v-card>
    <v-layout>
      <Sidenav/>
      <Content />
    </v-layout>
   </v-card>
  </v-app>
</template>
<script>
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import Content from '../components/content/Content';

export default{
  name:'mains',
  components:{
    Header,
    Sidenav,
    Content
  }
}
</script>
<style>
.v-navigation-drawer {
  z-index: 9999 !important;
  top: 0 !important;
  height: 100% !important;
}
#app{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
                Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

</style>


