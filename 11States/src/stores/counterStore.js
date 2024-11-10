import { defineStore } from "pinia";

// This is how we use in the pinia
// pinia also use for the debbugging becuase we can access the last state over from going to vue in the browser
export let useCounterStore = defineStore("counter", {
  // state
  state: () => {
    return {
      count: 0,
    };
  },

  // actions
  actions: {
    increment() {
      if(this.count < 10){
      this.count++;
      }
    },
    decrement() {
    if(this.count > -10){
      this.count--;
    }
    },
    reset() {
      this.count = 0;
    },
  },

  // getters to get something
  getters: {
    remaining(){
      return 10 - this.count
    }
  },
});