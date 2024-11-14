<script setup>
import { ref } from 'vue';
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import teamFooter from '@/components/Teams/teamFooter.vue';
import { useTeamStore } from '@/stores/teamStore.js';
import Modal from '@/components/Teams/Modal.vue';

let team = useTeamStore();
team.fill();

let showModal = ref(false);

setTimeout(() => {
  team.spots = 10;
}, 2000);
</script>

<template>
  <TeamHeader @add="showModal = !showModal" />
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>
  <teamFooter />
  <Modal :show="showModal" @close="showModal = false">

    <!-- Using slots to override the default content if we want -->
    <template #header>
      Overrided Header
    </template>
    <template #body>
      <p>
        Need to add a new member to the team?
      </p>
      <form>
        <input type="text" placeholder="Add New Member">
        <button type="submit">
          Add
        </button>
      </form>
    </template>
  </Modal>
</template>