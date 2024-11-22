<template>
    <form class="card" @submit.prevent="onSumbit">
        <h1>Войти в систему</h1>
        <div class="form-control" :class="{invalid: !!emailError}">
            <label for="email">Email</label>
            <input v-model="emailValue" id="email" type="email" @blur="handleEmailBlur" />
            <small v-if="emailError">{{ emailError }}</small>
        </div>
        <div class="form-control" :class="{invalid: !!passwordError}">
            <label for="password">Password</label>
            <input id="password" type="password" v-model="passwordValue" @blur="handlePasswordBlur" />
            <small v-if="passwordError">{{ passwordError }}</small>
        </div>

        <button class="btn primary" type="submit" :disabled="isSubmitting || isTooManyAttempts">Войти</button>
        <div class="text-danger" v-if="isTooManyAttempts">Слишком часто пытаетесь войти в систему</div>
    </form>
</template>

<script>

import { useRoute } from 'vue-router';
import { useLoginForm } from '../use/useLoginForm';
import { computed, onMounted, watch, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { errors } from '../utils/error';


    export default {
        setup() {
            const loginForm = useLoginForm();
            const store = useStore();

            const route = useRoute();

            if (route.query.message) {
                store.dispatch('setMessage', {value: errors[route.query.message], type: 'danger'})
            }

            return {...loginForm}
        }
    }
</script>

<style lang="scss" scoped>

</style>