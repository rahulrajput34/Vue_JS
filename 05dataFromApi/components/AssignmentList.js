// If I pass the AssignmentCreate like below then its creates for all which presents
// I just want to creates for the In progress section to add an input

// So for doing this task we pass the slot for it

// TODO: Now another question is that how can I show that cencel button for that one page only
// We can do it using the slot but its gets tricky
// So we use a simple method Flags

// Anser: Here we passed the v-show and canToggle function over there
// Then we passed inside the props and give the bydefault value false
// Then we passed this inside Assignments.js where we use this component which make this by default propery false to the true value 

// TODO: Now we want if anyone click on the button of X the whole page should be hidden
//For that one we passed the show true in the function and  make it false in case of the button clicked by giving the @click over there
{/* <button v-show="canToggle" @click="show = false">&times;</button> */}
// Then passed in the first-line v-show && in the first line so that if v-show has the true then and only then the page is going to display on the webpage otherwise not
{/* <section v-show="show && assignments.length"> */}



// TODO: Do it bu event omiting method
//  We also do it same thing by omiting an event as well
// For that we did all the steps inside the parent component
import Assignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js'
import AssignmentCreate from './AssignmentCreate.js'
import panel from './panel.js'
export default{
    components: {Assignment, AssignmentTags, AssignmentCreate, panel},
    template:/*html*/
    `
    <panel v-show="assignments.length" class="w-60">
    <div class="flex justify-between items-start">
      <h2 class="font-bold mb-2">
        {{ title }}
        <span>({{ assignments.length }})</span>
      </h2>
      <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
    </div>
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
      <slot></slot>
    </panel>
  ` ,
    props: {
        assignments: Array,
        title: String,
        canToggle: {
          type: Boolean,
          default: false
        }
    },
    data(){
      return {
        currentTag: 'all',
        // For first method
        // show: true
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
