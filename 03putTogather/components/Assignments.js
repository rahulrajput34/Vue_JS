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
