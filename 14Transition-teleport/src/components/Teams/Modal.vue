<script setup>
defineProps({
    show: Boolean,
})
</script>
<template>
    <!-- TODO: learning the transition -->
    <!-- This is how we can give the transition to model -->
    <!-- We give enter just to write the readable code -->
    <transition enter-fom-class="opacity-0" enter-to-class="opacity-100" enter-active-class="transition duration-1000"
        leave-active-class="transition duration-1000" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <header>
                    <slot name="header">Default header</slot>
                </header>
                <div>
                    <slot name="body">Default body</slot>
                </div>
                <footer>
                    <slot name="footer">
                        <button @click="$emit('close')"
                            class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200">
                            Default close
                        </button>
                    </slot>
                </footer>
            </div>
        </div>
    </transition>
</template>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    display: grid;
    place-items: center;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

/* TODO: we can also use these and put it above for the same tansition  */
/* .modal-enter-active, model-leave-active {
    transition: opacity 0.5s ease;
}

.modal-enter-from, model-leave-to  {
    transition: opacity 0.5s ease;
}

.modal-leave-to, model-enter-from {
    opacity: 100;
} */
</style>
