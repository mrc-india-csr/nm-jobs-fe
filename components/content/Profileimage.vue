<template>
  <div class="flex items-center justify-center text-center" id="app">
    <div
      class="upload-rectangle"
      :class="{ view: !isEditing }"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <input
        type="file"
        multiple
        :disabled="!isEditing"
        name="fields[assetsFieldHandle][]"
        id="assetsFieldHandle"
        class="opacity-0 overflow-hidden absolute d-none"
        @change="onChange"
        ref="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />
      <div class="mt-8" v-if="this.filelist.length > 0">
        <span>
          {{ this.filelist[0].name }}
        </span>
          <span class="delete-file" @click="remove(filelist[0])">
           x
          </span>
      </div>
     <div v-else>
      <label for="assetsFieldHandle" class="block cursor-pointer">
        <div>
          <img src="../../assets/profile-upload-icon.svg" class = "profile-upload-icon" />
        </div>
        <span class="underline-link">Click to Upload</span> <span class = "underline-text"> or drag and drop here </span>
        <div>
          <span class="underlined-info"> JPEG, SVG, PNG (max 800x400px) </span>
        </div>
      </label>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profileimage",
  delimiters: ["${", "}"], // Avoid Twig conflicts
  // setup() {
  //   let filelist = []; // Store our uploaded files
  // },
    props: {
    isEditing : Boolean,
    handleFileChange:  {type : Function }
  },
  data: () => ({
    filelist: [],
  }),
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
      this.handleFileChange(this.filelist[0]);
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains("bg-green-300")) {
        event.currentTarget.classList.remove("bg-gray-100");
        event.currentTarget.classList.add("bg-green-300");
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
  },
};
</script>
<style>

.underlined-info{
  font-size: 8px;
  color: #717171;
  font-weight: 400;
}

.underline-link{
  font-size:12px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #496968;
  cursor: pointer;
}

.underline-text{
  font-weight: 400;
  font-size:12px;
}

.profile-upload-icon{
  margin-top: 1rem;
}

.upload-rectangle
{
    position: absolute;
    height: 99px;
    left: 448px;
    right: 298px;
    top: 460px;
    background: #FCFCFC;
    border: 0.5px dashed #929292;
    border-radius: 3px;
    width: 36vw;
}
.delete-file {
    color: black;
    padding: 5px 10px;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
