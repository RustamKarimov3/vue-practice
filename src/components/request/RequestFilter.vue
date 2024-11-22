<template>
    <div class="filter">
        <div class="form-control">
            <input id="name" v-model="name" type="text" />
            <small>{{ name }}</small>
        </div>
        <div class="form-control">
            <select id="status" v-model="status">
                <option value="done">done</option>
                <option value="cancelled">cancelled</option>
                <option value="active">active</option>
                <option value="pending">pending</option>
            </select>
            <small>{{ name }}</small>
        </div>
        <button v-if="isActive" class="btn warning" @click="clear">Clear</button>
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue';

    export default {
        emits: ["update:modelValue"],
        props: ['modelValue'],
        setup(_,{emit}) {
            const name = ref()
            const status = ref()

            watch([name, status], (values) => {
                emit('update:modelValue', { name: values[0], status: values[1] })
            })

            const isActive = computed(() => !!(name.value || status.value))

            const clear = () => {
                name.value = undefined;
                status.value = undefined
            }


            return {name, status, isActive, clear}
        }
    }
</script>

<style lang="scss" scoped>

</style>