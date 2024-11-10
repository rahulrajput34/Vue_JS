<!-- QuizFooter.vue -->
<script setup>
import { state } from "@/stores/quizStores.js";
//TODO: This is how we can inject it
// import { inject } from "vue";
// const key = inject('key');
// const {name, changeName} = inject('name');

// let quiz = inject("quiz");

// Access the quiz prop
// defineProps({ quiz: Object });
</script>

<template>
  <!-- <button @click="changeName">{{ name }}</button> -->
  <div>
    <h5>{{ state.name }}</h5>
    <button @click = "state.name = 'I am changed hehe'">
      {{ state.name }}
    </button>
    <ul>
      <li><a href="#">Get a Job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>
