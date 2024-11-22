<template>
    <div class="container">
        <app-error></app-error>
        <router-view></router-view>
    </div>
</template>

<script>
import AppError from '../components/ui/AppError.vue';

    export default {
        components: {
            AppError
        }
    }
</script>

<style lang="scss" scoped>

</style>