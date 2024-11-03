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
    data(){
        return{
            newAssignment: ''
        }
    },
    methods:{
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
          },
    }

}