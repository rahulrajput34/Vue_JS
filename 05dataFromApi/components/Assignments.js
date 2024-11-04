// TODO: Now another question is that I want to add the input filed exact below the In Progress assignments
// Not inside the completed assignemnt

//Answer:
// So inside the AssignmentList we passed the slot over there so that we can pass the AssignmentCreate inside the AssignmentList
import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
  components: {
    AssignmentList,
    AssignmentCreate
  },
  template:/*html*/`
  <section class="text-white flex gap-8">
  <AssignmentList :assignments="filters.inProgress" title="In Progress">
    <AssignmentCreate @add="add"></AssignmentCreate>
  </AssignmentList>
  <AssignmentList 
    canToggle
    v-if="showCompleted"
    :assignments="filters.completed" 
    title="Completed"  
    @toggle="showCompleted = !showCompleted"
    >
  </AssignmentList>
  Rahul Rajput
</section>
  `,
// This above given text is going to display because of  slot we gave inside the AssignmentList
  data() {
    // We removed the values from here, create our own fake API also creates the fake server
    // Store it into the db.json
    // Now task is to use it over here
    return {
      assignments: [],
      showCompleted: true
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
