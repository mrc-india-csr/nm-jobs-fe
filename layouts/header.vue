<template>
  <div>
    <Head>
      <Title>Naan Mudhalvan Massive Upskilling Platform</Title>
    </Head>

    <v-app>
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
    </v-app>
  </div>
</template>
<script>
export default {
  name: "headers",
};
</script>

    