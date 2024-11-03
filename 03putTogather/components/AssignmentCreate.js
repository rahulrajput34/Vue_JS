// We want when the form is submitted that time the given function getting called that is why we passed @submit over there
// we can also pass other event like @click, for preventing default behaviour and submit at the same time @submit.prevent
export default{
    template:
    /*html*/`
    <form @submit.prevent="add">
        <div class="border border-gray-600 text-white mt-2 p-3 flex">
          <input v-model="newAssignment" class="text-black w-full p-2" type="text" placeholder="New Assignment..." />
          <button type="submit" class="bg-black p-2">Add</button>
        </div>
    </form>
    `,
    // props: {
    //     assignments: Array
    // },
    data(){
        return{
            newAssignment: ''
        }
    },
    methods:{
        add() {
        // Here we want to use the assignments but we do not have the access of it
        // So what we can do is that we can add the props over here and pass this props when we use it
            // this.assignments.push({
            //   name: this.newAssignment,
            //   complete: false,
            //   id: this.assignments.length + 1,
            // });

        // But if we do it like above like pass the props so its looks little bit weird
        // So we are using the $emit for pass the event
        //Important: When we use the child into the parent that time we use the concept of props
        // But when we want to use the parent into the child that time we use the event
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
          },

        //   Here we passed the add is called custom event
        // We will pass like @add into the parent component
    }

}