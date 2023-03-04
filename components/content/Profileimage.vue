<template>
  <div>
    <div v-if="state.files.length > 0" class="files">
      <div class="file-item" v-for="(file, index) in state.files" :key="index">
        <span>{{ file.name }}</span>
        <span class="delete-file" @click="handleClickDeleteFile(index)">
           x
          </span>
      </div>
    </div>
    <div v-else class="dropzone" v-bind="getRootProps()">
      <div
        class="border"
        :class="{
          isDragActive,
        }"
      >
        <input v-bind="getInputProps()" />
          <img class ="image-1"  src="../../assets/profile-upload-icon.svg">
        <p v-if="isDragActive">Drop the files here ...</p>
        <p v-else> Click here or drop the files here</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useDropzone } from 'vue3-dropzone';

const state = reactive({
  files: [],
});

const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
  onDrop,
});

watch(state, () => {
  const result = JSON.parse(JSON.stringify(new Proxy(state,{})))
  console.log('state', result.files[0]);
  //Check here
});

watch(isDragActive, () => {
  // console.log('isDragActive', isDragActive.value, rest);
});

function onDrop(acceptFiles: never[], rejectReasons: any) {
  console.log("Accept " + acceptFiles);
  // console.log(rejectReasons);
  state.files = acceptFiles;
}

function handleClickDeleteFile(index: number) {
  state.files.splice(index, 1);
}

</script>

<style lang="scss" scoped>
.dropzone,
.files {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  font-size: 12px;
  line-height: 1.5;
}

.border {
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: all 0.3s ease;
  background: #fff;

  &.isDragActive {
    border: 2px dashed black;
    background: rgb(255 167 18 / 20%);
  }
}

.file-item {
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border:0.5px dashed;
  padding: 20px;
  padding-left: 15px;
  margin-top: 10px;

  &:first-child {
    margin-top: 0;
  }

  .delete-file {
    color: black;
    padding: 5px 10px;
    border-radius: 8px;
    cursor: pointer;
  }

img .image-1{
position: absolute;
height: 54px;
left: 696px;
right: 560px;
top: 604px;
background: #496968;

  }
}
</style>
