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