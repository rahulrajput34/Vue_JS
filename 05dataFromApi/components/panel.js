// So here we do not know what would be the heading of us, like is it a text, svg or whatever
// So we passed the slot over there
// The one with the name heading is the named slot and the slot with nothing is our default slot

//TODO: One more problem is that here we created two panel over here, We passed one value in first panel and 2 value in the second panel
// So first panel creates two slot but as I passed the value one so its make one slot empty
// but I do not want to display it even emplty slot I want to remove it if the slot is empty
// For that we passed the condition if heading is present then and only then display that slot else not

// We also do it for footer
// What ever the property which return true inside the this mode will executes
// The first line is alway true which is going to executes for all the panels

export default{
    template: /*html*/
    `
    <div :class="{
        'p-4 border border-gray-600 rounded-lg': true,
        'bg-gray-100 border-gray-700 text-black': theme === 'light',
        'bg-gray-800 border-gray-100 text-white': theme === 'dark'
      }">
        <h2 v-if="$slots.heading" class="font-bold mb-2">
          <slot name="heading"/>
        </h2>
        <div>
          <slot />
        </div>
        <footer v-if="$slots.footer" class="mt-2">
          <slot name="footer"/>
        </footer>
      </div>
    `,
    props: {
        // then we can give the
        theme: {
            type: String,
            default: 'light'
          }
    }
}