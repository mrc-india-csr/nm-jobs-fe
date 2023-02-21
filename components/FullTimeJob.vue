<template>
  <div class="fulltime-form">
    <p class="form-title">Job Details</p>
    <div class="field-container">
      <p class="field-label">Job Title <span class="req">*</span>
      </p>
      <v-text-field class="text-field" v-model="formData.title" :rules="rules" density="compact" bg-color="white" variant="outlined"></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Job Description <span class="req">*</span>
      </p>
      <v-btn class="uploadBtn">
        <img class="icon" src="../assets/upload-icon.svg"> Upload File
      </v-btn>
      <br />
      <v-textarea variant="outlined" v-model="formData.description" class="text-area" auto-grow :rules="rules" rows="4" row-height="20"></v-textarea>
    </div>
    <div class="field-container">
      <p class="field-label">Category <span class="req">*</span>
      </p>
      <v-select :items="categories" density="compact" class="form-dropdown" bg-color="white" variant="outlined"></v-select>
    </div>
    <div class="field-container">
      <p class="field-label">Link</p>
      <v-text-field class="text-field" v-model="formData.link" density="compact" bg-color="white" variant="outlined"></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Experience <span class="req">*</span>
      </p>
      <v-select density="compact" class="form-dropdown" bg-color="white" variant="outlined"></v-select>
    </div>
    <div class="field-container">
      <p class="field-label">Job Type <span class="req">*</span>
      </p>
      <v-radio-group v-model="formData.workModel" inline :rules="rules">
        <v-radio class="form-radio" color="#AD793D" label="Onsite" value="onsite" density="compact"></v-radio>
        <v-radio class="form-radio" color="#AD793D" label="Hybrid" value="hybrid" density="compact"></v-radio>
        <v-radio class="form-radio" color="#AD793D" label="Remote" value="remote" density="compact"></v-radio>
      </v-radio-group>
    </div>
    <div class="field-container">
      <p class="field-label">Location <span class="req">*</span>
      </p>
      <v-text-field class="text-field" v-model="formData.location" :rules="rules" density="compact" bg-color="white" variant="outlined"></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Salary <span class="req">*</span>
      </p>
      <div class="stipend-dropdown">
        <v-select :items="currency" class="currency-symbol" density="compact" bg-color="white" variant="outlined"></v-select>
        <v-text-field class="stipend" v-model="formData.minSalary" :rules="rules" density="compact" bg-color="white" variant="outlined"></v-text-field>
        <v-text-field class="stipend" v-model="formData.maxSalary" :rules="rules" density="compact" bg-color="white" variant="outlined"></v-text-field>
        <v-select :items="salaryTerm" class="salary-months" density="compact" bg-color="white" variant="outlined"></v-select>
        <v-spacer />
      </div>
    </div>
    <div class="field-container">
      <p class="field-label">Other perks </p>
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
      <p class="field-label">Name <span class="req">*</span>
      </p>
      <v-text-field class="text-field" v-model="formData.name" :rules="rules" density="compact" bg-color="white" variant="outlined"></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Email <span class="req">*</span>
      </p>
      <v-text-field class="text-field" v-model="formData.email" :rules="emailRule" density="compact" bg-color="white" variant="outlined"></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Number <span class="req">*</span>
      </p>
      <v-text-field class="text-field" v-model="formData.number" :rules="rules" density="compact" bg-color="white" variant="outlined"></v-text-field>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FullTimeJob',
    data: () => ({
        formData: {
            title: "",
            description: "",
            link: "",
            exp: "",
            workModel: "",
            salaryType: "",
            minSalary: "",
            maxSalary: "",
            name: "",
            email: "",
            number: "",
        },
        rules: [
            value => {
                if (value) return true
                return 'Field is required'
            },
        ],
        emailRule: [
            (value) => {
                if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
                return 'Must be a valid e-mail.'
            },
        ],
        categories: ["Human resources", "Engineering", "Product Management"],
        currency: ["INR", "USD", "EUR"],
        salaryTerm: ["/week", "/month", "/year"]
    }),
}
</script>

<style>
.marginTop50{
    margin-top: 40px;
}
</style>