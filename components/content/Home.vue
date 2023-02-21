<template>
    <div class="home-content">   
      <div class="default-home-container"> 
        <img src="../../assets/default-home-vector.svg" />
        <span class="no-data-msg">
          No data available <br/>
          Post a job to get insights!
        </span>
      </div>
    </div>
</template>

<script>
  export default {
    name:'home',
  }
</script>

<style>
.default-home-container{
  position: absolute;
  top: 50%;
  left: 55%;   
  transform: translate(-50%, -50%);
  align-items: center;
  display: flex;
  flex-direction: column;
}
.no-data-msg{
  text-align: center;
  display: block;
  font-size: 16px;
  font-weight: 500;
  color:#959595;
}
</style>