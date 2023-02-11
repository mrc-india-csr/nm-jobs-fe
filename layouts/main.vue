<template>
  <div>
   <headers/>
   <sidenav/>
  </div>
</template>
<script>
import headers from '../components/header.vue';
import sidenav from '../components/sidenav.vue';

export default{
  name:'mains',
  components:{
    headers,
    sidenav
  }
}
</script>


