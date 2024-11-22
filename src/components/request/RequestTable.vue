<template>
    <h2 v-if="!requests.length" class="text-center">Заявок пока нет</h2>
    <table v-else class="table">
        <thead>
            <th>#</th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>Сумма</th>
            <th>Статус</th>
            <th>Действие</th>
        </thead>
        <tbody>
            <tr v-for="(item, index) in requests">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ currency(item.sum) }}</td>
                <td><app-status :status="item.status"></app-status></td>
                <td>
                    <router-link v-slot="{navigate}" :to="{name: 'Request', params: {id: item.id}}" custom>
                        <button class="btn " @click="navigate" >Открыть</button>
                    </router-link>
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { currency } from '../../utils/currency';
import AppStatus from '../ui/AppStatus.vue';
    export default {
        props: ['requests'],
        components: {AppStatus},
        setup() {
            return {currency}
        }
    }
</script>

<style lang="scss" scoped>

</style>