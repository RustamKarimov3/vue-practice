<template>
    <div class="question">
        <div class="question-title" @click="isOpen = !isOpen">{{ title }}</div>
        <div class="question-body" v-if="isOpen">{{ text }}</div>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default {
        props: ['title', 'text'],
        setup() {
            const isOpen = ref(false);

            return {isOpen}
        }
    }
</script>

<style lang="scss" scoped>

</style>