export default {
    // We give props to pass propery of one components to another

    // Here in the object, if the value is false then it would not show the property
    // if the property is true then it will display the css on the webpage
    // Here we are manuplating the css of the button by type of it
    template: `
        <button 
            :class='{
                "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded": false,
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded": type === "primary",
                "bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded": type === "secondary",
                "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded": type === "muted",
                "is-loading": processing
            }'
            :disabled="processing"
        >
            <slot/>  
        </button>
    `,
    props: {
        // This is one is the name in the props
        type: {
            // This is the type  of the props
            type: String,
            default: 'primary'
        }
    },

    data() {
        return {
            processing: {
                type: Boolean,
                default: false
            }

        }
    }
}
