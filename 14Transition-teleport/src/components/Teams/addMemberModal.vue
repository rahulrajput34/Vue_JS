<script setup>
import Modal from '@/components/Teams/Modal.vue';
import { ref } from 'vue';
import { useTeamStore } from '@/stores/teamStore.js';

let team = useTeamStore();

const showModal = ref(false);
</script>

<template>
    <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="!team.spotsRemaining" @click="showModal = true">
        Add Member ({{ team.spotsRemaining }} Spots Left)</button>

    <!-- This is how we can give the bottom the given id -->
    <Teleport to="#hello">
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
            <template #footer>
                Overrided Footer
            </template>
        </Modal>
    </Teleport>
</template>
