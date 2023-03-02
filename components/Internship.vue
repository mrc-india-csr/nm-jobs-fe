<template>
  <div class="internship-form">
    <p class="form-title">Internship Details</p>
    <div class="field-container">
      <p class="field-label">Internship Title <span class="req">*</span></p>
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
      <p class="field-label">
        Internship Description <span class="req">*</span>
      </p>
      <!-- File Upload -->
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
      <p class="field-label">Duration <span class="req">*</span></p>
      <v-text-field
        class="text-field"
        v-model="formData.duration"
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
      <p class="field-label">Type <span class="req">*</span></p>
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
      <p class="field-label">Stipend <span class="req">*</span></p>
      <v-radio-group
        class="stipend-type-choice"
        v-model="formData.stipendType"
        inline
        :rules="rules"
      >
        <v-radio
          class="form-radio"
          color="#AD793D"
          label="Paid"
          value="paid"
        ></v-radio>
        <v-radio
          class="form-radio"
          color="#AD793D"
          label="Unpaid"
          value="unpaid"
        ></v-radio>
      </v-radio-group>
      <div class="stipend-dropdown">
        <v-select
          :items="currency"
          v-model="formData.salaryCurrency"
          class="currency-symbol"
          density="compact"
          bg-color="white"
          variant="outlined"
          :disabled="!(formData.stipendType === 'paid')"
        ></v-select>
        <v-text-field
          class="stipend"
          v-model="formData.salary"
          :rules="rules"
          density="compact"
          bg-color="white"
          variant="outlined"
          :disabled="!(formData.stipendType === 'paid')"
        ></v-text-field>
        <v-select
          :items="salaryTerm"
          v-model="formData.salaryTerm"
          class="salary-months"
          density="compact"
          bg-color="white"
          variant="outlined"
          :disabled="!(formData.stipendType === 'paid')"
        ></v-select>
        <v-spacer />
      </div>
    </div>
    <br />
    <div class="field-container">
      <p class="field-label">Other perks</p>
      <v-row>
        <div v-for="perk in perks.data">
          <v-checkbox
            class="form-checkbox"
            v-model="formData.otherPerks"
            color="#AD793D"
            :label="perk"
            :value="perk"
          ></v-checkbox>
        </div>
      </v-row>
    </div>
    <div class="field-container margin-top10">
      <v-row>
        <v-col>
          <p class="field-label margin-top10">
            Does this internship come with a pre-placement
            <span class="req">*</span> <br />
            offer ( PPO ) or Full Time offer
          </p>
        </v-col>
        <v-col>
          <v-switch
            v-model="formData.isPPO"
            hide-details
            true-value="Yes"
            false-value="No"
            :label="`${formData.isPPO}`"
            color="#AD793D"
          ></v-switch>
        </v-col>
      </v-row>
    </div>
    <p class="form-title">Contact Details</p>
    <div class="field-container height50">
      <v-row>
        <v-checkbox
          class="form-checkbox"
          @change="spocCheckClicked"
          v-model="formData.copySpoc"
          color="#AD793D"
          label="Copy Company SPOC details"
          value="spocDetails"
        ></v-checkbox>
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
  name: "Internship",
  props: {
    formData: Object,
    perks: Object,
    fetchSpocDetails: { type : Function },
    handleFileChange:  {type : Function }
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
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
          return true;
        return "Must be a valid e-mail.";
      },
    ],
    categories: ["Human resources", "Engineering", "Product Management"],
    currency: ["INR", "USD", "EUR"],
    salaryTerm: ["week", "month", "year"],
    defaultInternshipDesc: "Upload File",
    selectedFile: null,
    isSelecting: false,
  }),
  computed: {
    buttonText() {
      return this.selectedFile
        ? this.selectedFile.name
        : this.defaultInternshipDesc;
    },
  },
  methods: {
    spocCheckClicked() {
      this.fetchSpocDetails();
    },
    onButtonClick() {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        {
          once: true,
        }
      );
      this.$refs.file.click();
    },
      onFileChanged(e) {
      this.selectedFile = e.target.files[0];
      this.handleFileChange(this.selectedFile);
      //console.log("selectedFile",this.selectedFile,e.target.files);
      //const buffer =await this.selectedFile.arrayBuffer()
      //console.log(buffer)
      //console.log(typeof(buffer))
      //let byteArray = new Int8Array(buffer)
      
      //console.log("View",byteArray);

      // const buffer = this.selectedFile.arrayBuffer();
      // let uintImage = new Uint8Array(buffer);


      // let arrayBuffer = uintImage.buffer;

      // // let finalByteArray = bytearray(byteArr);
      // console.log(arrayBuffer);
      // console.log(typeof(arrayBuffer))
      // console.log(typeof(byteArray))

      // const byteFile = await getAsByteArray(this.selectedFile)
      // const reader = new FileReader()
      // reader.readAsText(this.selectedFile);

      // reader.onload = () => {

      //   // this.image = reader.result.split(',')[1]

      //   console.log(typeof(reader.result))
      //   // console.log(this.image)
      //   // console.log(typeof(this.image))
      // }
      // console.log(random)
    },
  },
};
</script>

<style>
.v-overlay-container > .v-overlay > .v-select__content {
  background-color: white !important;
}
.form-dropdown {
  margin-right: 30px;
  max-width: 150px;
  width: 180px !important;
  margin-top: 5px;
}
.form-dropdown > .v-input__control {
  width: 180px !important;
  outline: auto rgba(220, 220, 220, 1) !important;
}
.form-radio {
  font-size: 10px;
  margin: 0px 10px 0px -10px;
}
.form-radio > .v-label {
  font-size: 12px;
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
  width: 180px !important;
}
.text-field > .v-input__control > .v-field {
  height: 30px !important;
  font-size: 12px;
}
.text-field > .v-input__details {
  padding-left: 0px;
}
.text-field > .v-input__control > .v-field > .v-field__field > .v-field__input {
  padding: 5px 5px 15px 5px !important;
}
.text-area {
  width: 400px !important;
}
.text-area > .v-input__details {
  padding-left: 0px;
}

.icon {
  margin: 5px 5px 5px 0px;
}
.v-btn {
  border: 1px solid rgba(155, 155, 155, 0.38) !important;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 10px;
  border-radius: 5%;
  text-transform: none;
  font-size: 10px;
  height: 30px !important;
}
.req {
  color: red;
}

.field-container {
  margin: 5px 0px;
}
.form-title {
  font-size: 14px;
  font-weight: 600;
  color: rgba(96, 94, 92, 1);
}
.field-label {
  font-size: 12px;
  font-weight: 500;
  color: rgba(96, 94, 92, 1);
}

.stipend-dropdown {
  display: flex;
}
.stipend-type-choice > .v-input__details {
  margin-top: -10px;
}
.currency-symbol {
  margin-right: -8px;
  max-width: 100px;
  width: 80px !important;
  margin-top: 5px;
  height: 40px !important;
}
.currency-symbol > .v-input__control {
  width: 90px !important;
  height: 40px !important;
  outline: auto rgba(220, 220, 220, 1) !important;
}
.salary-months {
  margin-right: 5px;
  max-width: 120px;
  width: 100px !important;
  margin-top: 5px;
  height: 40px !important;
}
.salary-months > .v-input__control {
  width: 100px !important;
  height: 40px !important;
  outline: auto rgba(220, 220, 220, 1) !important;
}
.stipend {
  height: 40px !important;
  margin: 5px;
}
.margin-top10 {
  margin-top: 10px;
}
.height50 {
  height: 50px;
}
</style>
