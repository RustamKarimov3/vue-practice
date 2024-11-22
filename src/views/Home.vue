<template>
  <app-loader v-if="loading"></app-loader>
  <app-page v-else title="Список заявок">
    <template #header>
      <button class="btn primary" @click="openModal">Создать</button>
    </template>
    <request-filter v-model="filters"></request-filter>
    <pre>{{ filters }}</pre>
     <request-table :requests="requests"></request-table>
  </app-page>
  <teleport to="body" >
    <app-modal v-if="isOpen" title="Создать заявку" @close="closeModal">
      <request-modal @created="closeModal"></request-modal>
    </app-modal>
  </teleport>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import RequestTable from '../components/request/RequestTable.vue';
import AppPage from '../components/ui/AppPage.vue';
import AppModal from '../components/ui/AppModal.vue';
import RequestModal from '../components/request/RequestModal.vue';
import { useStore } from 'vuex';
import AppLoader from '../components/ui/AppLoader.vue';
import RequestFilter from '../components/request/RequestFilter.vue';

export default {
  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal,
    AppLoader,
    RequestFilter
  },
  setup() {
    const store = useStore();
    const isOpen = ref(false);
    const loading = ref(false);

    const filters = ref({});

    const requests = computed(() => store.getters['request/requestsList']
      .filter(i => {
  
        if (filters.value.name) {
          return i.name.includes(filters.value.name)
        }

        return true;
      })
      .filter(i => {
        if (filters.value.status) {
          return i.status === filters.value.status
        }

        return true;
      }));

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })




    const closeModal = () => {
      isOpen.value = false;
    }
    const openModal = () => {
      isOpen.value = true;
    }

    return {isOpen, openModal, closeModal, requests, loading, filters}
  }
}
</script>
