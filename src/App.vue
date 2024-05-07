<template>
  <div>
    <navBar />
    <div class="container bg-secondary">
      <router-view></router-view>
  </div>
  </div>
</template>

<script setup>

import navBar from '@/components/navBar.vue'
</script>

<style scoped lang="scss">
.container{
  position: relative;
  top: 100px;
  height: 450px;
}
</style>
