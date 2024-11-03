// **************************      Summary of basics       ************************************ 
//Here where we starts the break the index3.html file for learning the how components and props works
// And learn event omit event handle of the vue js
// And get to know about more method like @click, @submit and all

// When we break down all the component they are interrelated to each other by passing a props and the omiting the events
// Here we give mounted function , the function over here and the function inside its child component both are linked to each other
// In the data section, this exaample we pased the hardcode value but in real life we get all those value from the APIs calls from database like using axios and all
// When we want access the value of parent component in the child component that time we use event handling whereas when we want access the child into the parent that time we use the concept of the props
// When we want to use any component its must have the passed props inside it when we are using it otherwise its gonna throw an error
// We also learnt some of the common practices like if we are giving the componenet names we tried to give it start with same letter if the they are related to each other

import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
// We need to give the first line over here components
export default {
  components: {
    AssignmentList,
    AssignmentCreate
  },
  template:/*html*/`
  <section class="space-y-6 text-white">
   <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
   <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
    <AssignmentCreate @add="add"></AssignmentCreate>
  </section>
  `,
  data() {
    // Here in the assignments we passed the hardcode value
    // We can also do the axios req and get the data from the database over here
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1, tag:'math' },
        { name: "Read chapter", complete: false, id: 2, tag:'science'},
        { name: "Turn in homework", complete: false, id: 3, tag:'math'},
      ],
    }
  },
  // This is how we put all the filter method inside one filter function to make code more readibale
  computed: {
    filters() {
      return  {
          inProgress: this.assignments.filter((a) => !a.complete),
          completed: this.assignments.filter((a) => a.complete)
      }
    }
  },
  methods: {
    // Pushing new values into assignments array
    // This name is come from the AssignmentCreate.js using event
    // And rest of will be goes from here
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
    },
  },  
}
