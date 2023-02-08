<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer permanent class="nav-drawer sidebar-font">
        <v-list
        >
          <v-list-item
          @click="handleClick"
            title="Home"
            class="sidebar-font"
            value="home"
          ></v-list-item>
          <v-list-item
          @click="handleClick"
            title="Jobs"
            class="sidebar-font"
            value="Jobs"
          ></v-list-item>
          <v-list-item
          @click="handleClick"
            title="My Profile"
            class="sidebar-font"
            value="My Profile"
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

.sidebar-font {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

}
.sidebar-font
  :active {
  color: #ffe5c7;
  background: #253534;}
  
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
  },
};
</script>