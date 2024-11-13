<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import teamFooter from '@/components/Teams/teamFooter.vue';
import { useTeamStore } from '@/stores/teamStore.js';
let team = useTeamStore();

team.fill();
setTimeout(() => {
  team.spots = 10;
}, 2000);
</script>

<template>
  <TeamHeader/>
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers/>
  </div>
  <teamFooter/>
</template>
