<template>
<div class="internship-form">
<p class="form-title">Internship Details</p>
<v-form>
<div class="field-container">
<p class="field-label">Internship Title <span class="req">*</span></p>
<input class="text-field" v-model="message"/>
</div>
<div class="field-container">
<p class="field-label">Internship Description <span class="req">*</span></p>
<v-btn class="uploadBtn">   <img class="icon" src="../assets/upload-icon.svg"> Upload File</v-btn>
<input class="text-area" v-model="message"/>

</div>
</v-form>
</div>
</template>
<script>
  export default {
          name:'Internship',
  }
</script>

<style scoped>
.text-field{
    border: 1px solid rgba(172, 172, 172, 1);
        padding: 12px 8px;
        height:30px;        
        margin : 5px 0px;
border-radius: 5px;
        width: 180px;
}
.text-area{
    border: 1px solid rgba(172, 172, 172, 1);
        padding: 12px 8px;
        height:100px;        
        margin : 5px 0px;
border-radius: 5px;
        width: 180px;
}
.icon{
    margin:5px 5px 5px 0px;
}
.v-btn{
  border: 1px solid rgba(155, 155, 155, 0.38)!important;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom : 10px;
  border-radius: 5%;
  text-transform: none;
  font-size: 10px;
  height: 30px !important;
}
.req{
    color : red;
}
.v-input .v-input__control .v-field {
    height: 10px;
}
.field-container{
    margin:5px 0px;
}
.form-title{
    font-size:14px;
    font-weight: 600;
    color:rgba(96, 94, 92, 1);
}
.field-label{
    font-size: 12px;
    font-weight: 500;
    color:rgba(96, 94, 92, 1);
}
.v-text-field{
      width: 180px !important;
      padding : 0px !important;
}
.v-field .v-field--no-label .v-field--variant-outlined .v-theme--light{
    height: 10px !important;
}

</style>