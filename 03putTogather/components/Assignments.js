import AssignmentList from "./AssignmentList.js";
// We need to give the first line over here components:
export default {
  components: {
    AssignmentList,
  },
  template: `
   <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
   <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
  `,
  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1 },
        { name: "Read chapter", complete: false, id: 2 },
        { name: "Turn in homework", complete: false, id: 3 },
      ],
    };
  },
  // This is how we put all the filter method inside one filter function to make code more readibale
  computed: {
    filters() {
      return  {
          inProgress: this.assignments.filter((a) => !a.complete),
          completed: this.assignments.filter((a) => a.complete)
      };
    }
  }
}
