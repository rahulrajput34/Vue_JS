import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
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
    // We removed the values from here, create our own fake API also creates the fake server
    // Store it into the db.json
    // Now task is to use it over here
    return {
      assignments: [],
    }
  },
  computed: {
    filters() {
      return  {
          inProgress: this.assignments.filter((a) => !a.complete),
          completed: this.assignments.filter((a) => a.complete)
      }
    }
  },
  // We fetch the API in the created function
  // We can also use axios if want
  created() {
    fetch('http://localhost:3001/assignments')
      .then((response) => response.json())
      .then((data) => {
        this.assignments = data;
      });
  },
  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
    },
  },  
}
