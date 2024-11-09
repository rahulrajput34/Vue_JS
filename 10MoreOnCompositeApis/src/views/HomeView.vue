<script setup>
import { onMounted, ref } from 'vue';
let textarea = ref(null);  

function onKeydown(e){
  let t = textarea.value;
  if(e.key === 'Tab') {
    let val = t.value,
    start = t.selectionStart,
    end = t.selectionEnd

    t.value = val.substring(0, start) + '\t' + val.substring(end);
    t.selectionStart = t.selectionEnd = start + 1;

    e.preventDefault(); 
  }
}
</script>

<template>
  <main>
    <textarea ref="textarea" @keydown="onKeydown" style="width: 100%; height: 300px;">Hi There!</textarea>
  </main>
</template>
