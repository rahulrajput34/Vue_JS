<script setup>
function onTabPressed(e){
  // we can also get it from the target, we do not need to pass the ref as well
  let textArea = e.target;
    let val = textArea.value,
    start = textArea.selectionStart,
    end = textArea.selectionEnd

    textArea.value = val.substring(0, start) + '\t' + val.substring(end);
    textArea.selectionStart = textArea.selectionEnd = start + 1;
}
</script>
<template>
  <main>
    <textarea @keydown.tab.prevent="onTabPressed" style="width: 100%; height: 300px;">Hi There!</textarea>
  </main>
</template>
