export default {
    //  Instead of passing @click="currentTag = tag" over here we gonna omit this event
    // Here inside the $click we ommit the event
    template: /*html*/ 
    `
    <div class="flex gap-2">
        <button 
          v-for="tag in tags" 
          :key="tag" 
          @click="$emit('update:modelValue', tag)"
          class="border rounded px-1 py-px text-xs mb-5"
          :class = "{
            'border-blue-500 text-blue-500': tag === modelValue
          }"
        >
          {{ tag }}
        </button>
      </div>
    `,

    // We passed the initialtags over here and when we use this component that time also pass that one, Becase our this name tags is same as the computed function tags() So we either change the function name or pass the intialTags over here
    // Its gonna be the very common practise inside the vue js
    props: {
        initialTags: Array,
        modelValue: String
    },

    computed: {
        tags(){
            return ['all', ...new Set(this.initialTags)];
          }
    }
}