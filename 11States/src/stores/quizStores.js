import { reactive } from "vue";

// To make the object reactive we use the reactive in place of the ref
export let state = reactive({ 
    name: 'My another Quiz', 
    questions: []
});