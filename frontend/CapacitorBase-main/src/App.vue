<template>
  <div class="phone-wrapper">
    <div class="phone-screen">
      <router-view />
    </div>
  </div>
</template>

<style>
.phone-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e0e0e0;
}

.phone-screen {
  width: 390px;
  height: 844px;
  overflow-y: auto;
  border-radius: 40px;
  box-shadow: 0 0 40px rgba(0,0,0,0.4);
  background: white;
  position: relative;
}
</style>

<script setup>
//
</script>
