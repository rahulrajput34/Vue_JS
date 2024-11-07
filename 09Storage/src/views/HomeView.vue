<script setup>
import { ref, watch } from 'vue';
import { useStorage } from '@/composables/useStorage.js';
// TODO: what is the use of the local storage
// Some time in the big project we need to submit the big forms if something happen between the passing the form data then user need to pass the data again from the start
// So we have localstorage for it so that the forms start from where he left
// There might be some other usage of it


// let food = ref(localStorage.getItem('food') || '');
// let age = ref(localStorage.getItem('age') || '');


// to solve the issue of not changin in the memory by settimeout we gonna use the watch 
// So watch helps to change in the memory as well
// watch(food, (val)=> {
//   write('food', val)
// });

// TODO:If I need to watch the age as well I need to pass the function again
// So I am using the composable over here to solve this issue
// watch(age, (val)=> {
//   write('age', val)
// });

// simple way
let food = useStorage('food', 'salad');
let age = useStorage('age', 20);
// if we are using object that time do the json parse
let obj = useStorage('obj', { one: 'one'});
setTimeout(() => {
  // obj.value.one = 'Changed';
  obj.value = { "changedEntirely": 'HEHEChanged' };
}, 10000);

// function write(key, val) {
//   localStorage.setItem(key, val);
// }
// // Working fine
// //TODO: But its change on the page only not in the memory
// setTimeout(() => {
//   food.value = 'changed';
// }, 2000);

</script>
<template>
  <main>
    <p>
      What is your favorite food? 
      <input type="text" v-model="food" @input="write('food', food)">
    </p>
    <p>
      How old are you?
      <input type="text" v-model="age" @input="write('age', age)">
    </p>
  </main>
</template>
