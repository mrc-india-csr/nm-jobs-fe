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
                <v-btn class="uploadBtn">   <img class="icon" src="../assets/upload-icon.svg"> Upload File</v-btn><br/>
                <input class="text-area" v-model="message"/>
            </div>
            <div class="field-container">
                <p class="field-label">Category <span class="req">*</span></p>
                <v-select  density="compact" class = "form-dropdown" ></v-select>
            </div>
            <div class="field-container">
                <p class="field-label">Link</p>
                <input class="text-field" v-model="message"/>
            </div>
            <div class="field-container">
                <p class="field-label">Number of Openings <span class="req">*</span></p>
                <input class="text-field" v-model="message"/>
            </div>
            <div class="field-container">
                <v-radio-group inline>
                    <v-radio class= "form-radio" color="#AD793D" label="Onsite" value="onsite" density="compact"></v-radio>
                    <v-radio class= "form-radio" color="#AD793D" label="Hybrid" value="hybrid" density="compact"></v-radio>
                    <v-radio class= "form-radio" color="#AD793D" label="Remote" value="remote" density="compact"></v-radio>
                </v-radio-group>            
            </div>                                    
            <div class="field-container">
                <p class="field-label">Location <span class="req">*</span></p>
                <div class="vue-shtr">
                <v-select class = "form-dropdown" density="compact"></v-select>
                </div>
            </div>
            <div class="field-container">
                <v-radio-group inline>
                    <v-radio class= "form-radio" color="#AD793D" label="Paid" value="paid"></v-radio>
                    <v-radio class= "form-radio" color="#AD793D" label="Unpaid" value="unpaid"></v-radio>
                </v-radio-group>            
                <v-select class = "form-dropdown" density="compact"></v-select>
                <input class="text-field" v-model="message"/>
                <v-select class = "form-dropdown" density="compact"></v-select>
            </div>            
            <div class="field-container">
            <p class="field-label">Other perks <span class="req">*</span></p>
            <v-row>
                <v-checkbox class="form-checkbox" color="#AD793D" label="Certificate" value="certificate"></v-checkbox>
                <v-checkbox class="form-checkbox" color="#AD793D" label="Letter of recommendations" value="recommendationLetter"></v-checkbox>
                <v-checkbox class="form-checkbox" color="#AD793D" label="Flexible working hours" value="flexiblehours"></v-checkbox>
            </v-row>
            </div>                                                
        </v-form>
    </div>
</template>
<script>
  export default {
    name:'Internship',
  }
</script>

<style>

.form-dropdown {
    margin-right: 30px;    
    max-width: 150px;
    width:180px !important;
    margin-top: 5px;     
}
.form-dropdown > .v-input__control { 
    width:180px !important;
    outline: auto rgba(220, 220, 220, 1) !important;
}  
.form-radio {
    font-size: 10px;
 }
.form-radio > .v-label {
    font-size:12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
                Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
}
.form-checkbox {
    font-size: 10px;
    height: 30px;
}
.form-checkbox > .v-label {
    font-size:12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    margin-left: -10px !important;
}
.text-field {
    border: 1px solid rgba(172, 172, 172, 1);
    padding: 12px 8px;
    height:30px;        
    margin : 5px 0px;
    border-radius: 5px;
    width: 180px;
}
.text-area {
    border: 1px solid rgba(172, 172, 172, 1);
    padding: 12px 8px;
    height:100px;        
    margin : 5px 0px;
    border-radius: 5px;
    width: 22rem;
}
.icon {
    margin:5px 5px 5px 0px;
}
.v-btn {
    border: 1px solid rgba(155, 155, 155, 0.38)!important;
    margin-top: 8px;
    margin-right: 8px;
    margin-bottom : 10px;
    border-radius: 5%;
    text-transform: none;
    font-size: 10px;
    height: 30px !important;
}
.req {
    color : red;
}

.field-container {
    margin:5px 0px;
}
.form-title {
    font-size:14px;
    font-weight: 600;
    color:rgba(96, 94, 92, 1);
}
.field-label {
    font-size: 12px;
    font-weight: 500;
    color:rgba(96, 94, 92, 1);
}
.v-text-field {
    width: 180px !important;
    padding : 0px !important;
}

</style>