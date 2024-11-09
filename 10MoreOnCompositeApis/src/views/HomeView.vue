<script setup>
// TODO: Functinality for if the tag is pressed give four space

import { onMounted, ref } from 'vue';
// TODO: This is how we can access eny element from the componenet
// Just pass this varibale name inside that component
let textarea = ref(null);  // helps to just get the reference of that elemenet
// console.log(textarea);


// The mounted is helpful to get the html of the given ref
onMounted(() => {
  //To get the value inside the give elemenet, we must give value.value because we want value inside the text area
  // console.log(textarea.value.value);

// We must give textarea.value to access the elemenet
textarea.value.addEventListener('keydown', (e) => {
  let t = textarea.value;
  // This code is of tab key
  if(e.key === 'Tab') {
  
    // this is how we do it get the first and end 
    let val = t.value,
    start = t.selectionStart,
    end = t.selectionEnd
    
    // set t value to: text before caret + tag + text after caret
    t.value = val.substring(0, start) + '\t' + val.substring(end);

    // put caret at right position again
    t.selectionStart = t.selectionEnd = start + 1;

    e.preventDefault(); 
  }
})
})
</script>

<template>
  <main>
    <textarea ref="textarea" style="width: 100%; height: 300px;">Hi There!</textarea>
  </main>
</template>
