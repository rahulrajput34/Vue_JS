<script setup>
import { useCounterStore } from '@/stores/counterStore.js';
let counter = useCounterStore();
</script>

<template>
    <div>
        <h1>
            {{ counter.count }}
        </h1>
        <!-- Here {{ counter.remaining }} we do not need to give the paranthisis -->
         <!-- If the no counter then  disbale the button -->
        <button 
        @click="counter.increment()"
        :disabled= '!counter.remaining'
        >Increment: remaining({{ counter.remaining }})</button>
        <button @click="counter.decrement()">Decrement</button>
        <button @click="counter.reset()">Reset</button>
    </div>
</template>