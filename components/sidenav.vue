<template>
      <v-navigation-drawer permanent class="nav-drawer sidebar-font">
        <v-list>
          <v-list-item
            @click="handleClick('home')"
            title="Home"
            class="sidebar-font"
            value="home">
          </v-list-item>
          <v-list-item
            @click="handleClick('jobs')"
            title="Jobs"
            class="sidebar-font"
            value="Jobs">
          </v-list-item>
          <v-list-item
            @click="handleClick('profile')"
            title="My Profile"
            class="sidebar-font"
            value="My Profile"
            v-bind:style="[handleactiveness?sidebar-font-active:sidebar-font]">
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh; position: relative;padding: 85px;"></v-main>
</template>
<style>
.nav-drawer {
  max-width: 8.875rem;
  background: #304443;
  position: fixed;
  margin-top: 3.8rem;
}

v-list :hover{
  background-color: transparent !important;
}

.sidebar-font {
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

}
.sidebar-font :focus{
  color: #FFE5C7;
  background-color:#253534;
  font-weight: 500;  
}

</style>
<script>
import { useFormStore } from '../store/formStore';
const store = useFormStore();

export default {
  name: "sidenav",

  data() {
    return {
      active: false,
    };
  },
  methods: {        
    handleClick(tab) {
      store.activeTab = tab;
      this.active = !this.active;
    },
    handleactiveness(){
      console.log(this.active)
      return this.active;
    },
  },
};
</script>