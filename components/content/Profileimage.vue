<template>
  <div class="drop-file">
    <div v-bind="getRootProps()">
      <input v-bind="getInputProps()">
      <p v-if="isDragActive">Drop the files here ...</p>
      <p v-else>Drag 'n' drop some files here, or click to select files</p>
      <div v-if="isFocused" id="focus">
        focused
      </div>
      <div v-if="isDragReject" id="isDragReject">
        isDragReject: {{ isDragReject }}
      </div>
    </div>
    <button @click="open">open</button>
    {File.path}
  </div>
  <div class="ellipse">
        <img class ="image"  src="../../assets/company-name.svg"> 
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useDropzone } from 'vue3-dropzone'
import type { FileRejectReason } from 'vue3-dropzone'

function onDrop(acceptedFiles: File[], rejectReasons: FileRejectReason[]) {
  console.log('acceptedFiles', acceptedFiles)
  console.log('rejectReasons', rejectReasons)
}

const options = reactive({
  multiple: false,
  onDrop,
  accept: '.png',
})

const {
  getRootProps,
  getInputProps,
  isDragActive,
  isFocused,
  isDragReject,
  open
} = useDropzone(options)


</script>

<style>
.drop-file
{
    ox-sizing: border-box;
    position: absolute;
    height: 89px;
    left: 495px;
    top: 394px;
    background: #FCFCFC;
    border: 0.5px dashed #929292;
    border-radius: 5px;
}

.ellipse
{
    position: absolute;
    height: 82px;
    width: 82px;
    left: 314px;
    right: 326px;
    top: 392px;
    background: #EAF5F5;
    border-radius: 100%;
}

.image
{
    position: absolute;
left: 8.34%;
right: 8.34%;
top: 12.5%;
bottom: 12.5%;

}
</style>
