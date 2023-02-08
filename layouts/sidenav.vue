<template>
    <v-card>
        <v-layout>
          <v-navigation-drawer permanent class="nav-drawer sidebar-font" style="top:66px;  background: #304443">
            <v-list>
              <v-list-item
                title="Home"
                class="sidebar-font"
                value="home"
              ></v-list-item>
              <v-list-item
                title="Jobs"
                class="sidebar-font"
                value="Jobs"
              ></v-list-item>
              <v-list-item
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
<style scoped>
.nav-drawer {
  min-width: 8.875rem;
  background: #304443;
  position: fixed;
  margin-top: 76px;
  padding-top: 2.5rem;
}

.sidebar-font {
 
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;


}
</style>
<script>
export default{
    name:'sidenav'
}
</script>