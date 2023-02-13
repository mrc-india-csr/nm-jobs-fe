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
                <v-select class = "form-dropdown" density="compact"></v-select>
            </div>
            <div class="field-container">
                <p class="field-label">Stipend <span class="req">*</span></p>
                <v-radio-group inline>
                    <v-radio class= "form-radio" color="#AD793D" label="Paid" value="paid"></v-radio>
                    <v-radio class= "form-radio" color="#AD793D" label="Unpaid" value="unpaid"></v-radio>
                </v-radio-group>       
                <div class="stipend-dropdown">     
                    <v-select class = "currency-symbol" density="compact"></v-select>
                    <input class="text-field stipend" v-model="message"/>
                    <v-select class = "salary-months" density="compact"></v-select>
                </div>
            </div>            
            <div class="field-container">
            <p class="field-label">Other perks <span class="req">*</span></p>
            <v-row>
                <v-checkbox class="form-checkbox" color="#AD793D" label="Certificate" value="certificate"></v-checkbox>
                <v-checkbox class="form-checkbox" color="#AD793D" label="Letter of recommendations" value="recommendationLetter"></v-checkbox>
                <v-checkbox class="form-checkbox" color="#AD793D" label="Flexible working hours" value="flexiblehours"></v-checkbox>
            </v-row>
            </div>       
            <div class="field-container margin-top10">
            <v-row>
                <v-col>
                    <p class="field-label margin-top10">Does this internship come with a pre-placement <span class="req">*</span> <br/>
                                        offer ( PPO ) or Full Time offer </p>
                </v-col>
                <v-col>                                        
                    <v-switch  :model-value="true" label="Yes" color="#AD793D" value="Yes"></v-switch>
                </v-col>
            </v-row>
            </div>      
            <p class="form-title">Contact Details</p>
            <div class="field-container height50">
                <v-row>
                    <v-checkbox class="form-checkbox" color="#AD793D" label="Copy Company SPOC details" value="spocDetails"></v-checkbox>
                </v-row>
            </div>          
            <div class="field-container">
                <p class="field-label">Name <span class="req">*</span></p>
                <input class="text-field" v-model="message"/>
            </div>
            <div class="field-container">
                <p class="field-label">Email <span class="req">*</span></p>
                <input class="text-field" v-model="message"/>
            </div>
            <div class="field-container">
                <p class="field-label">Number <span class="req">*</span></p>
                <input class="text-field" v-model="message"/>
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
    margin: 0px 10px 0px -10px;
 }
.form-radio > .v-label {
    font-size:12px;
    font-weight: 600;
}
.form-checkbox {
    font-size: 10px;
    height: 30px;
}
.form-checkbox > .v-input__control > .v-selection-control > .v-label {
    font-size: 14px;
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
.stipend-dropdown{
    display: flex;
    margin-top: -30px;
}
.currency-symbol{
    margin-right: -8px;
    max-width: 100px;
    width:80px !important;
    margin-top: 5px;   
        height: 40px !important;
}
.currency-symbol > .v-input__control { 
    width:90px !important;
    height: 40px !important;
    outline: auto rgba(220, 220, 220, 1) !important;
}  
.salary-months{
    margin-right: 5px;    
    max-width: 100px;
    width:80px !important;
    margin-top: 5px;   
    height: 40px !important; 
}
.salary-months > .v-input__control { 
    width:90px !important;
    height: 40px !important;
    outline: auto rgba(220, 220, 220, 1) !important;
} 
.stipend{
    height: 40px !important;
    margin: 5px;
}
.margin-top10{
margin-top: 10px;
}
.height50{
    height: 50px;
}
</style>