<!-- TODO: What is setup over here -->
<!-- after using this we do not need to register the componet, export it and many things as we did inside the pervious lectures  -->
<!-- In simple words its give us to write the ability to write the code in the react like syntaxt because its do all the work behind the scene -->

<script setup>
// If we do not use the setup over here it gonna be too much of code which we wrote before
// But here we can see its not to much and the code is more readable
// here inside this to make message reactive we must use the hook
import { onMounted, ref } from "vue";

// Now the message is going to be reactive
// change all over if I change inside the input
let message = ref("Rahul Rajput");

// outside the function its fine if we do not pass the message.value
message.value = "I am changed";

// If I want to pass inside the settime out like that I need to pass it like message.value
setTimeout(() => {
  // If we do not want use this value there is macro over there search on internet
  message.value = "I have been changed by setTimeout";
}, 2000);
</script>

<template>
  <main>
    <h1>
      {{ message }}
      <p>
        <input type="text" v-model="message" />
      </p>
    </h1>
  </main>
</template>
