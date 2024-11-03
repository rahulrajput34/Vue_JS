// To work this component its need to have the title, assignments
// Now we want to add the count of how many assignment is there over here
// And we want to give the dynamic value for the assignmenets
// For this we have passed the span tag over there
// Just pass the lenght and its works do not neet to do anything extra

// Now I want the assignment which is in perticuler domain
// Here inside the @change we listen the event

// bind the value and pass event to it
// :current-tag="currentTag"
// @change="currentTag = $event"
// Instead of these two use the v-model
import Assignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js'
export default{
    components: {Assignment, AssignmentTags},
    template:/*html*/
    `
    <section v-show="assignments.length">
      <h2 class="font-bold mb-2">
        {{ title }}
        <span>({{ assignments.length }})</span>
      </h2>
        <AssignmentTags
        :initial-tags="assignments.map(a => a.tag)"
        v-model="currentTag"
        ></AssignmentTags>
      <ul>
        <Assignment 
          v-for="assignment in filteredAssignments " 
          :key="assignment.id" 
          :assignment="assignment">
        </Assignment>
      </ul>
    </section>
  `
  // we passed the props becuase we are not able to access assignment and title over here
  // So we must pass the props so that someone where he use this component they can pass the props from where he is using 
  ,
    props: {
        assignments: Array,
        title: String
    },
    
    data(){
      // The value from we got over here is from the @click="currentTag = tag"
      return {
        currentTag: 'all'
      }
    },
    computed: {
      filteredAssignments(){
        if(this.currentTag === 'all'){
          return this.assignments
        } 
        return this.assignments.filter(a => a.tag === this.currentTag)
      }, 
    }
}