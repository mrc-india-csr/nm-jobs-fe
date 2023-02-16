<script>
import Jobs from './Jobs';
import Profile from './Profile';
import Home from './Home';
import { useFormStore } from '../../store/formStore';

export default{
  setup(){
    const store = useFormStore();
    const { activeTab } = storeToRefs(store);
    return { activeTab };
  },
  name:'content',
  components:{
    Jobs,
    Profile,
    Home    
  }
}
</script>

<template>
    <div class="app-content">          
    <Jobs v-if="activeTab==='jobs'"/>
    <Profile v-else-if="activeTab==='profile'"/>
    <Home v-else/>  
    </div>
</template>

<style>
.app-content{
    width: 100%;
    margin-top: 80px;
}
</style>