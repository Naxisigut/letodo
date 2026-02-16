<template>
  <div id="app">
    <router-view />
    <Toaster position="top-center" />
    <ModalsContainer />
  </div>
</template>

<script setup>
import { ModalsContainer } from 'vue-final-modal'
// Vue 3 Composition API
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
