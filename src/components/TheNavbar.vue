<template>
    <nav class="navbar">
        <h3>Онлайн банк</h3>
        <ul class="navbar-menu">
            <li><router-link to="/">Заявки</router-link></li>
                <li><router-link to="/help">Помощь</router-link></li>
                <li><a href="#" @click.prevent="openSidebar">Сообщения</a></li>
                <li><a href="#" @click.prevent="logout">Выход</a></li>
        </ul>
    </nav>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

    export default {
        setup() {
            const router = useRouter();
            const store = useStore();

            const openSidebar = () => {
                store.commit('openSidebar');
            }


            const logout = () => {
                store.commit('auth/logout');
                router.push('/auth')
            }


            return {logout, openSidebar}
        }
    }
</script>

<style lang="scss" scoped>

</style>