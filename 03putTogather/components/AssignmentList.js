// To work this component its need to have the title, assignments
// Now we want to add the count of how many assignment is there over here
// And we want to give the dynamic value for the assignmenets
// For this we have passed the span tag over there
// Just pass the lenght and its works do not neet to do anything extra

// Now I want the assignment which is in perticuler domain
import Assignment from './Assignment.js'
export default{
    components: {Assignment},
    template:/*html*/`
    <section v-show="assignments.length">
      <h2 class="font-bold mb-2">
        {{ title }}
        <span>({{ assignments.length }})</span>
      </h2>
      <div class="flex gap-2">
        <button 
          v-for="tag in tags" 
          :key="tag" 
          @click="currentTag = tag"
          class="border rounded px-1 py-px text-xs mb-5">
          {{ tag }}
        </button>
      </div>
      <ul>
        <assignment 
          v-for="assignment in assignments " 
          :key="assignment.id" 
          :assignment="assignment">
        </assignment>
      </ul>
    </section>
  `,
    props: {
        assignments: Array,
        title: String
    },
    data(){
      // The value from we got over here is from the @click="currentTag = tag"
      return {
        currentTag: ''
      }
    },
    computed: {
      tags(){
        // set is to just get the unique value from the given array
        return new Set(this.assignments.map(a => a.tag));
      }
    }
}