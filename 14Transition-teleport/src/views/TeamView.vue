<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import teamFooter from '@/components/Teams/teamFooter.vue';
import { useTeamStore } from '@/stores/teamStore.js';
// TODO: Sometime we need to give the just before the body ends
// For that reason we are using teleporting
// There is also a good practise to use the teleporting at the time of using the modal
// Its also specifically helpful for the CSS classes we give to the project

let team = useTeamStore();
team.fill();
setTimeout(() => {
  team.spots = 10;
}, 2000);
</script>

<template>
  <TeamHeader/>
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>
  <teamFooter />
  <!-- It would be teleported to the body -->
  <!-- Its simply means put this in the bottom of the body -->
</template>
