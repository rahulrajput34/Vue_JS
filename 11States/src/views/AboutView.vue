<template>
  <div class="about">
    <h1>{{ counter.count }}</h1>
  </div>
</template>

<script setup>
import { counter } from '@/stores/counterStore.js';
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
