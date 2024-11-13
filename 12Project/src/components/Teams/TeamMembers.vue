<script setup>
import TeamMember from './TeamMember.vue';
import { useTeamStore } from '@/stores/teamStore.js';
let team = useTeamStore();
</script>

<template>
     <table class="table-fixed border-spacing-2 border-separate">
      <thead>
        <th class="text-left px-6 py-2">Name</th>
        <th class="text-left px-6 py-2">Email</th>
        <th class="text-left px-6 py-2">Status</th>
      </thead>
        <tbody>
          <!-- This is how we do the loop of the data got from the team.json file -->
          <TeamMember v-for="member in team.teamMembers" :name="member.name" :email="member.email" :status="member.status" />
        </tbody>
      </table>
       <!-- If the sport not left then show the message -->
      <p 
      class="text-right text-gray-600 italic"
      v-show="!team.spotsRemaining"
      >
      There are no remaining team spots. Upgrade to add more.</p>
</template>


