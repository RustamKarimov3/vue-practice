<template>
<app-loader v-if="loading"></app-loader>
<app-page back v-else-if="request" :title="request.name">
    <h1>Заявка</h1>
    {{ request }}
    <span>Status: {{ status }}</span>
    <div class="form-control">
        <select id="status" v-model="status">
            <option value="done">done</option>
            <option value="cancelled">cancelled</option>
            <option value="active">active</option>
            <option value="pending">pending</option>
        </select>
    </div>
    <button class="btn danger" @click="remove">Удалить</button>
    <button v-if="isChanged" class="btn primary" @click="update">Обновить</button>
</app-page>
<h3 v-else class="text-center text-white">No so</h3>

</template>

<script>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AppLoader from '../components/ui/AppLoader.vue';
import AppStatus from '../components/ui/AppStatus.vue';
import AppPage from '../components/ui/AppPage.vue';

    export default {
        components: {AppLoader, AppStatus, AppPage},
        setup() {
            const route = useRoute();
            const router = useRouter();
            const store = useStore();
            const loading = ref();
            const request = ref();
            const status = ref();

            const id = route.params.id;

            const updateStatus = (e) => {
                status.value = e.target.value
            }

            onMounted(async () => {
                loading.value = true;
                request.value = await store.dispatch('request/loadById', id)
                status.value = request.value.status
                loading.value = false;
            })

            watch(request, (v) => {
                console.log(v)
            })

            const remove = async () => {
                await store.dispatch('request/remove', id)

                router.push('/')
            }
            const update = async () => {
                await store.dispatch('request/update', {id,  request: {status: status.value}})

                request.value.status = status.value
            }

            const isChanged = computed(() => request.value.status !==status.value)

            return {request, status, loading,isChanged, remove, update, updateStatus}

        }
    }
</script>

<style lang="scss" scoped>

</style>