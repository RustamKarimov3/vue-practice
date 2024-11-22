<template>
  <!-- <div class="card"><h1>{{ token }} token</h1></div> -->
  <component :is="`${layout}-layout`" v-if="layout" />
</template>

<script>
import MainLayout from './layout/MainLayout.vue';
import AuthLayout from './layout/AuthLayout.vue';
import { useRoute, useRouter, } from 'vue-router';
import { isRef } from 'vue';
import { isReactive } from 'vue';
import { ref, watch } from 'vue';
import { reactive } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {MainLayout, AuthLayout},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const layout = computed(() => route.meta.layout)
    // const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])

    // watch(isAuthenticated, (v) => {
    //   if (!isAuthenticated) {
    //     router.push('/auth')
    //   }
    // })

    return {layout}
  }
}
</script>

