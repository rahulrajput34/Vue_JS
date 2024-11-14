<script setup>
import Modal from '@/components/Teams/Modal.vue';
import { ref } from 'vue';
import { useTeamStore } from '@/stores/teamStore.js';

let team = useTeamStore();
const showModal = ref(false);
let loaded = ref(false);

// We gave the timeout over here because we want a jugad for displaying the Teleport
// Because After the element is mounted then and only then teleport works
setTimeout(() => {
    loaded.value = true;
}, 2000);
</script>

<template>
    <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="!team.spotsRemaining" @click="showModal = true">
        Add Member ({{ team.spotsRemaining }} Spots Left)</button>
    <!-- TODO:  -->
    <!--It would be teleported to the body if we give the body over here -->
    <!-- Its simply means put this in the bottom of the given element -->
    <!-- This is how we can give the bottom the given id -->
    <Teleport v-if="loaded" to="#hello">
        <Modal :show="showModal" @close="showModal = false">
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
    </Teleport>
</template>
