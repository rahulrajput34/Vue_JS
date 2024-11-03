export default {
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