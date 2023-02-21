<template>
    <div class="header">
        <Head>
            <Title>Naan Mudhalvan Massive Upskilling Platform</Title>
        </Head>
            <v-app-bar dense elevation="4" flat outlined prominent rounded>                  
                <img class="logo" src="../assets/nm-logo.svg"/>
                <v-spacer></v-spacer>
                <v-select :items="items" variant="outlined" density="compact" class = "language" v-model="defaultSelected" bg-color="white" ></v-select>
            </v-app-bar>
    </div>
</template>

<script>
  export default {
    name:'header',
    data: () => ({
      defaultSelected: "English",
      items: ["English","Tamil"],
    }),
  }
</script>

<style>
.language{
    margin-right: 30px;    
    max-width: 150px;
    width:130px !important;
    margin-top: 20px;
}
.logo{
    margin: 20px;
    padding : 20px;
}
.header{
  z-index: 1000;
}
</style>