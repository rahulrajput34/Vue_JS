<script setup>
// we passed the modelValue over here so thaat if someone goes to the HomeView and use this component and v-model over there then it is going to work over there

// These two defineProps, defineEmits only inside the script setup
defineProps({
    modelValue: String
})
// TODO: when we are changing the text on the textarea that time its not chaging inside the v-model
// For that we need to omit the event from here
// When there is emiting of the event that time we also pass the event over here 
// its optional but good to pass
let emit = defineEmits([
    'update:modelValue'
]);
function onTabPressed(e){
  // we can also get it from the target, we do not need to pass the ref as well
  let textArea = e.target;
    let val = textArea.value,
    start = textArea.selectionStart,
    end = textArea.selectionEnd

    textArea.value = val.substring(0, start) + '\t' + val.substring(end);
    textArea.selectionStart = textArea.selectionEnd = start + 1;
}

// The event we give
function update(e){
    // here inside the target the value is going to be the value of the textarea
    // This is the syntax it must be same
    emit('update:modelValue', e.target.value)
}
</script>

<template>
    <!-- When we pass keydown key over here means at the time of click the tab key onTabPressed works and keyup when the key is up tag that time its emit the event -->
    <textarea 
    @keydown.tab.prevent="onTabPressed"
    v-text="modelValue"
    @keyup="update"
    ></textarea>
</template>