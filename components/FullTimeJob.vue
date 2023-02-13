<template>
    <div class="fulltime-form">
    <p class="form-title">Job Details</p>
        <v-form>
            <div class="field-container">
                <p class="field-label">Job Title <span class="req">*</span></p>
                <input class="text-field" v-model="message"/>
            </div>
            <div class="field-container">
                <p class="field-label">Job Description <span class="req">*</span></p>
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
                <p class="field-label">Experience <span class="req">*</span></p>
                <v-select  density="compact" class = "form-dropdown" ></v-select>
            </div>
            <div class="field-container">
                <p class="field-label">Job Type <span class="req">*</span></p>
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
                <p class="field-label">Salary <span class="req">*</span></p>
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
                <v-checkbox class="form-checkbox" color="#AD793D" label="Letter of recommendations" value="recommendationLetter"></v-checkbox>
                <v-checkbox class="form-checkbox" color="#AD793D" label="Flexible working hours" value="flexiblehours"></v-checkbox>
                <v-checkbox class="form-checkbox" color="#AD793D" label="Employee wellness programme" value="wellness"></v-checkbox>
            </v-row>
            </div>                  
            <div class="field-container height50 marginTop50">
                <p class="form-title">Contact Details</p>
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
    name:'FullTimeJob',
  }
</script>

<style>
.marginTop50{
    margin-top: 40px;
}
</style>