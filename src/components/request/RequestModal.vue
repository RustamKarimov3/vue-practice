<template>
    <form @submit.prevent="onSubmit">
        <div class="form-control" :class="{invalid: !!nameError}">
            <label for="name">ФИО</label>
            <input id="name" type="text" v-model="name"  />
            <small v-if="nameError">{{ nameError }}</small>
        </div>
        <div class="form-control">
            <label for="phone">Phone</label>
            <input id="phone" type="text" v-model="phone" @blur="handlePhoneBlur"/>
            <small v-if="phoneError">{{ phoneError }}</small>
        </div>
        <div class="form-control">
            <label for="sum">Сумма</label>
            <input id="sum" type="number" v-model="sum" @blur="handleSumBlur" />
            <small v-if="sumError">{{ sumError }}</small>
        </div>
        <div class="form-control">
            <label for="status">Статус</label>
            <select id="status" v-model="status" @blur="handleStatusBlur">
                <option value="done">done</option>
                <option value="cancelled">cancelled</option>
                <option value="active">active</option>
                <option value="pending">pending</option>
            </select>
            <small v-if="statusError">{{ statusError }}</small>
        </div>

        <button class="btn primary" type="submit">Создать</button>
    </form>
</template>

<script>
import { useStore } from 'vuex';
import {useRequestForm} from '../../use/useRequestForm';

    export default {
        emits: ['created'],
        setup(_, {emit}) {
            const store = useStore();

            const submit = (v) => {
                store.dispatch('request/create', v);
                emit('created')

            }
            const requestForm = useRequestForm(submit);

            return {...requestForm}
        }
    }
</script>

<style lang="scss" scoped>

</style>