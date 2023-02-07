<template>
  <div>
    <Head>
      <Title>Naan Mudhalvan Massive Upskilling Platform</Title>
    </Head>
    <v-app style="position: fixed">
      <v-app-bar
        dense
        elevation="4"
        flat
        outlined
        prominent
        rounded
      ></v-app-bar>
      <div>
        <slot />
      </div>

      <v-card>
        <v-layout>
          <v-navigation-drawer  permanent class="nav-drawer" >
            
            <v-list>
              <v-list-item title="Home" value="home"></v-list-item>
              <v-list-item title="Jobs" value="Jobs"></v-list-item>
              <v-list-item title="My Profile" value="My Profile"></v-list-item>
            </v-list>
          </v-navigation-drawer>

          <v-main style="height: 100vh; position: relative"></v-main>
        </v-layout>
      </v-card>
    </v-app>
  </div>
</template>

<style>
.nav-drawer{
background: #304443;
position:fixed; 
margin-top: 2em; 
padding-top: 2rem;
}
</style>
