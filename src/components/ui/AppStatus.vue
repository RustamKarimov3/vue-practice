<template>
    <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { computed } from 'vue';

    export default {
        props: ['status'],
        setup(props) {
            const classesMap = {
      active: 'primary',
      cancelled: 'danger',
      done: 'primary',
      pending: 'warning'
    }

    const textMap = {
      active: 'Активен',
      cancelled: 'Отменен',
      done: 'Завершен',
      pending: 'Выполняется'
    }
            const className = computed(() => classesMap[props.status]);
            const text = computed(() => textMap[props.status]);

            return {className, text}
        }
    }
</script>

<style lang="scss" scoped>

</style>