<template>
  <div class="fulltime-form">
    <p class="form-title">Job Details</p>
    <div class="field-container">
      <p class="field-label">Job Title <span class="req">*</span></p>
      <v-text-field
        class="text-field"
        v-model="formData.title"
        :rules="rules"
        density="compact"
        bg-color="white"
        variant="outlined"
      ></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Job Description <span class="req">*</span></p>
      <v-btn class="uploadBtn" @click="onButtonClick">
        <img class="icon" src="../assets/upload-icon.svg" /> {{ buttonText }}
      </v-btn>
      <input
        class="d-none"
        ref="file"
        type="file"
        @change="onFileChanged"
        accept="image/*"
      />
      <br />
      <v-textarea
        variant="outlined"
        v-model="formData.description"
        class="text-area"
        auto-grow
        :rules="rules"
        rows="4"
        row-height="20"
      ></v-textarea>
    </div>
    <div class="field-container">
      <p class="field-label">Category <span class="req">*</span></p>
      <v-select
        :items="categories"
        v-model="formData.category"
        density="compact"
        class="form-dropdown"
        bg-color="white"
        variant="outlined"
        :rules="rules"
      ></v-select>
    </div>
    <div class="field-container">
      <p class="field-label">Link</p>
      <v-text-field
        class="text-field"
        v-model="formData.link"
        density="compact"
        bg-color="white"
        variant="outlined"
      ></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Number of Openings <span class="req">*</span></p>
      <v-text-field
        class="text-field"
        v-model="formData.numberOfOpenings"
        :rules="rules"
        density="compact"
        bg-color="white"
        variant="outlined"
      ></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Experience <span class="req">*</span></p>
      <v-select
        density="compact"
        :items="experience"
        v-model="formData.experience"
        class="form-dropdown"
        bg-color="white"
        variant="outlined"
        :rules="rules"
      ></v-select>
    </div>
    <div class="field-container">
      <p class="field-label">Job Type <span class="req">*</span></p>
      <v-radio-group v-model="formData.workModel" inline :rules="rules">
        <v-radio
          class="form-radio"
          color="#AD793D"
          label="Onsite"
          value="onsite"
          density="compact"
        ></v-radio>
        <v-radio
          class="form-radio"
          color="#AD793D"
          label="Hybrid"
          value="hybrid"
          density="compact"
        ></v-radio>
        <v-radio
          class="form-radio"
          color="#AD793D"
          label="Remote"
          value="remote"
          density="compact"
        ></v-radio>
      </v-radio-group>
    </div>
    <div class="field-container">
      <p class="field-label">Location <span class="req">*</span></p>
      <v-text-field
        class="text-field"
        v-model="formData.location"
        :rules="rules"
        density="compact"
        bg-color="white"
        variant="outlined"
      ></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Open Until <span class="req">*</span></p>
      <v-text-field
        class="text-field"
        type="date"
        v-model="formData.openUntil"
        :rules="rules"
        density="compact"
        bg-color="white"
        variant="outlined"
      ></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Salary <span class="req">*</span></p>
      <div class="stipend-dropdown">
        <v-select
          :items="currency"
          class="currency-symbol"
          v-model="formData.salaryCurrency"
          density="compact"
          bg-color="white"
          variant="outlined"
          :rules="rules"
        ></v-select>
        <v-text-field
          class="stipend"
          v-model="formData.minSalary"
          :rules="rules"
          density="compact"
          bg-color="white"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          class="stipend"
          v-model="formData.maxSalary"
          :rules="rules"
          density="compact"
          bg-color="white"
          variant="outlined"
        ></v-text-field>
        <v-select
          :items="salaryTerm"
          class="salary-months"
          v-model="formData.salaryTerm"
          density="compact"
          bg-color="white"
          variant="outlined"
          :rules="rules"
        ></v-select>
        <v-spacer />
      </div>
      <br />
    </div>
    <div class="field-container">
      <p class="field-label">Other perks</p>
      <v-row>

        <div v-for="perk in perks.data">      
          <v-checkbox class="form-checkbox" v-model="formData.otherPerks" color="#AD793D" :label="perk" :value="perk"></v-checkbox>
        </div>
      </v-row>
    </div>
    <br />
    <div class="field-container height50 marginTop50">
      <p class="form-title">Contact Details</p>
      <v-row>
        <v-checkbox class="form-checkbox" @change="spocCheckClicked" v-model="formData.copySpoc" color="#AD793D" label="Copy Company SPOC details" value="spocDetails"></v-checkbox>
      </v-row>
    </div>
    <div class="field-container">
      <p class="field-label">Name <span class="req">*</span></p>
      <v-text-field
        class="text-field"
        v-model="formData.contactName"
        :rules="rules"
        density="compact"
        bg-color="white"
        variant="outlined"
      ></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Email <span class="req">*</span></p>
      <v-text-field
        class="text-field"
        v-model="formData.contactEmail"
        :rules="emailRule"
        density="compact"
        bg-color="white"
        variant="outlined"
      ></v-text-field>
    </div>
    <div class="field-container">
      <p class="field-label">Number <span class="req">*</span></p>
      <v-text-field
        class="text-field"
        v-model="formData.contactPhone"
        :rules="rules"
        density="compact"
        bg-color="white"
        variant="outlined"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullTimeJob",
  props: {
    formData: Object,
    perks: Object,
    fetchSpocDetails: {type: Function}
  },
  data: () => ({
    rules: [
      (value) => {
        if (value) return true;
        return "Field is required";
      },
    ],
    emailRule: [
      (value) => {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) return true;
        return "Must be a valid e-mail.";
      },
    ],
    categories: ["Human resources", "Engineering", "Product Management"],
    currency: ["INR", "USD", "EUR"],
    salaryTerm: ["/week", "/month", "/year"],
    experience: [
      "0-2 years",
      "3-5 years",
      "5-10 years",
      "10-15 years",
      "15+ years",
    ],
    defaultFullTimeDesc: "Upload File",
    selectedFile: null,
    isSelecting: false,
  }),
  computed: {
    buttonText() {
      return this.selectedFile
        ? this.selectedFile.name
        : this.defaultFullTimeDesc;
    },
  },
  methods: {
    onButtonClick() {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );

      this.$refs.file.click();
    },
    spocCheckClicked() {
        this.fetchSpocDetails();
    },
    async onFileChanged(e) {
      this.selectedFile = e.target.files[0];
      
      const buffer =await this.selectedFile.arrayBuffer()
      console.log(buffer)
      console.log(typeof(buffer))
      // console.log(this.selectedFile.name)
    },
  },
};
</script>

<style>
.marginTop50 {
  margin-top: 40px;
}
</style>
