<script setup>
import { useTeamStore } from '@/stores/teamStore.js';
let team = useTeamStore();
</script>

<template>
    <footer class="mt-12 bg-gray-100 py-4 text-center">
        <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.spots }} Member Team</h5>
        <!-- This is where we target the id of footer over -->
        <!-- TO give the teleport below over here we give this id in the teleport -->
        <div id="hello">
            <h1>
                Hello
            </h1>
        </div>
    </footer>
</template>
