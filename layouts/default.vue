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
          <v-navigation-drawer permanent class="nav-drawer sidebar-font">
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
    </v-app>
  </div>
</template>

<style>
.nav-drawer {
  /* min-width: 8.875rem; */
  background: #304443;
  position: fixed;
  margin-top: 2em;
  padding-top: 2rem;
}

.sidebar-font {
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1875rem;
  letter-spacing: 0.01em;
  text-align: left;
}
</style>
