<!-- Main component -->
<script setup>
import QuizHeader from "@/components/Quiz/QuizHeader.vue";
import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
import QuizFooter from "@/components/Quiz/QuizFooter.vue";
// import { provide, ref} from "vue";

// Pass quiz prop and provide the key
// defineProps({ quiz: Object });
//TODO: This is how we provide it
// provide('key', 'I am provided by the provide keyword');
// let name = ref("HAHA I am reactive");

// provide("name", {
//   name: name,
//   changeName: () => {
//     name.value = 'I am Changed';                    
//   },
// });

// let props = defineProps({ quiz: Object });
// provide('quiz', props.quiz)
</script>

<template>
  <QuizHeader />
  <QuizQuestion />
  <!-- <p>{{ name }}</p> -->
  <!-- <QuizFooter :quiz="quiz" /> -->
  <QuizFooter/>
</template>
