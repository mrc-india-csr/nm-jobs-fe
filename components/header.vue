<template>
    <div>
        <Head>
            <Title>Naan Mudhalvan Massive Upskilling Platform</Title>
        </Head>
        <v-app>
            <v-app-bar dense elevation="4" flat outlined prominent rounded>                  
                <img class="logo" src="../static/assets/nm-logo.svg"/>
                <v-spacer></v-spacer>
                <v-select :items="items" solo class = "language" v-model="defaultSelected" density="compact"></v-select>
            </v-app-bar>
            <br/><br/><br/>
            <div>
                <slot/>
            </div>
        </v-app>
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
.logo{
    margin: 20px;
    padding : 20px;
}
.language{
    margin-right: 30px;
    margin-top: 20px;
    max-width: 150px;
}

.language.v-select>.v-input__control{ 
     border: 1px solid rgba(0, 0, 0, 0.38)!important;
} 

</style>