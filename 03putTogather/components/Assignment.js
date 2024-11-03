// This is what is the concpet is called components
// To break it down into smaller chunks of the code and use it whenver we want
// And also learnt the concept of the props
export default{
    template:/*html*/`
        <li>
          <label>
            {{ assignment.name }}
            <input v-model="assignment.complete" type="checkbox" />
          </label>
        </li>
    `,
    props: {
        assignment: Object
    }
}