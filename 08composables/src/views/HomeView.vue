<!-- TODO: here we have passed flash function over here, Now we want to use it inside the AboutView componenet as well How can we use it without pasting directoly to that page?? -->
<!-- For that we use Mixins-->
<!-- Here we made the Mixins folder and get the method from it but what if we have too much of code than its not good practise to use it becuase the code becomes less clear  -->

<!-- TODO: So we use the composable to figure out this situation -->
<script setup>
// import {useFlash} from "@/composables/useFlash.js"
// export default{
//   setup(){
//     let {flash} = useFlash();
//     return {flash};
//   }
// }


// We can write the cleaner way of writing this code by using setup
import {useFlash} from "@/composables/useFlash.js"
let {flash} = useFlash();

</script>

<template>
  <main>
    <p>
      <h1>
        Home page
      </h1>
      <button @click="flash('It works!')">
        Click Me
      </button>
    </p>
  </main>
</template>