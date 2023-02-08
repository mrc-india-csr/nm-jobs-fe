<template>
  <div>
   <headers/>
   <sidenav/>
  </div>
</template>
<script>
import headers from './header.vue';
import sidenav from './sidenav.vue';

export default{
  name:'mains',
  components:{
    headers,
    sidenav
  }
}
</script>


