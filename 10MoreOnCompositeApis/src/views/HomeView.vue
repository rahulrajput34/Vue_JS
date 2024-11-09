<script setup>
import TabbableTextArea from '@/composables/TabbableTextArea.vue';
import { ref } from 'vue';
let comment = ref('Hi There!')

setTimeout(() => {
  comment.value = 'I am changed buddy Whyyyy'
}, 3000)

</script>
<template>
  <main>
    <form>
      <TabbableTextArea 
      v-model="comment" 
      style="width: 100%; height: 300px;"
      />
    </form>
  </main>
</template>
