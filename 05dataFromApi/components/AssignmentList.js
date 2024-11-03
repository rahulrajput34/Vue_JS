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
  ` ,
    props: {
        assignments: Array,
        title: String
    },
    
    data(){
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