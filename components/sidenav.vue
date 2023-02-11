<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer permanent class="nav-drawer sidebar-font">
        <v-list
        >
        <NuxtLink to="/">
          <v-list-item
          @click="handleClick"
            title="Home"
            class="sidebar-font"
            value="home"

            ></v-list-item>
        </NuxtLink>

        <NuxtLink to = "/jobs/">
          <v-list-item
          @click="handleClick"
            title="Jobs"
            class="sidebar-font"
            value="Jobs"
          ></v-list-item>
          </NuxtLink>
          <v-list-item
          @click="handleClick"
            title="My Profile"
            class="sidebar-font"
            value="My Profile"
            v-bind:style="[handleactiveness?sidebar-font-active:sidebar-font]"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh; position: relative"></v-main>
    </v-layout>
  </v-card>
</template>
<style >
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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

v-list{
  text-decoration: none;
}


</style>
<script>
export default {
  name: "sidenav",

  data() {
    return {
      active: false,
    };
  },
  methods: {
    handleClick() {
      console.log("Here")
      this.active = !this.active;
      console.log(this.active)
    },
    handleactiveness(){
      console.log(this.active)
      return this.active;
    },
  },
};
</script>