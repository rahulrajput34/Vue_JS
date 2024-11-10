<script setup>
import Quiz from "@/components/Quiz/QuiZ.vue";
// TODO: we did it inside the store and import it over here
import { state } from "@/stores/quizStores.js";

</script>
<template>
  <main>
    <!-- <Quiz :quiz="{ name: 'My First Quiz', questions: []}" /> -->
    <Quiz :quiz="state" />
  </main>
</template>
