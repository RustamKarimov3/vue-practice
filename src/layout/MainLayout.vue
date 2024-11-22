<template>
    <TheNavbar />
    <the-sidebar />
    <div class="container with-nav">
        <app-error></app-error>
        <router-view></router-view>
    </div>
</template>

<script>
    import TheNavbar from '../components/TheNavbar.vue';
import TheSidebar from '../components/TheSidebar.vue';
    import AppError from '../components/ui/AppError.vue'

    export default {
        components: {TheNavbar, AppError, TheSidebar}
    }
</script>

<style lang="scss" scoped>

</style>