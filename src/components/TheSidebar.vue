<template>
    <div v-if="sidebar" class="sidebar">
        <span class="sidebar-close" @click="close">&times;</span>
        <span class="sidebar-content">Velit cillum veniam magna sit commodo id nulla proident nisi.
            Non aliquip aliquip cupidatat aute tempor sint. Minim exercitation id minim Lorem excepteur.
            Nulla ipsum reprehenderit Lorem proident cillum consectetur laborum veniam commodo deserunt.</span>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

    export default {
        setup() {
            const store = useStore();
            const sidebar = computed(() => store.state.sidebar)

            const close = () => {
                store.commit('closeSidebar')
            }

            return {sidebar, close}
        }
    }
</script>

<style lang="scss" scoped>

</style>