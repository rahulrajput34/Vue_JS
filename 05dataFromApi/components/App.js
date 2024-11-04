// TODO: We also learnt how can we setout our own npm so that we can run the given url by just passing  --   npm run ourgivenName
// How We did, can see inside the package.json file

// TODO: We also gonna learn the how we can give mutliple slots to the one component because there is high change in real apps each components has the more than one slot in it

// After passing the slot inside the panel, we are able to pass the div over here
// We can pass anything like div, svg, image, text whatever
// This is how we pass names to the slot, where its come from

// One more important thing is that we do not need to write the full name like v-slot:footer
// We have short form of it as well #footer
import Assignments from "./Assignments.js";
import panel from "./panel.js";
export default {
  components: {
    Assignments, panel
  },
  template:/*html*/ `
  <div class="grid gap-5 text-white">
  <Assignments></Assignments>
  <!-- First panel with only default slot -->
  <panel class="mb-2">
    This is my default slot
  </panel>
  <!-- Second panel with heading and default slots -->
  <panel class="mb-2">
    <template v-slot:heading>
      This is my heading slot
    </template>
    <template v-slot:default>
      This is my default slot
    </template>
  </panel>
  <!-- Third panel with heading, default, and footer slots -->
  <panel class="mb-2">
    <template v-slot:heading>
      This is my heading slot
    </template>
    <template v-slot:default>
      This is my default slot
    </template>
    <template v-slot:footer>
      This is my footer slot
    </template>
  </panel>
  <!-- Fourth panel with theme prop set to dark -->
  <panel theme="dark" class="mb-2">
    <template v-slot:heading>
      This is my heading slot
    </template>
    <template v-slot:default>
      This is my default slot
    </template>
    <template #footer>
      This is my footer slot
    </template>
  </panel>
</div>
  `,
};
