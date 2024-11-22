import { computed, ref, watch } from 'vue';
import {useField, useForm} from 'vee-validate';
import * as yup from 'yup';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const useLoginForm = () => {
    const store = useStore();
    const router = useRouter()
    const {handleSubmit, isSubmitting, submitCount} = useForm();

    const {value: emailValue, errorMessage: emailError, handleBlur: handleEmailBlur} = useField('email', yup.string().trim().required('Введите мэйл').email('email не корректный'))
    const {value: passwordValue, errorMessage: passwordError, handleBlur: handlePasswordBlur} = useField('password', yup.string().trim().required("Введите пароль").min(6, 'Должен быть больше 6 симоволов'))

    const onSumbit = handleSubmit(async (values) => {
        const isSuccess = await store.dispatch('auth/login', values);

        if (isSuccess) {
            router.push('/');
        }
    })

    const isTooManyAttempts = computed(() => submitCount.value >= 3);

    watch(isTooManyAttempts, (v) => {
        if (v) {
            setTimeout(() => submitCount.value = 0, 1500)
        }
    })


    return {emailValue, emailError, handleEmailBlur, passwordValue, passwordError, handlePasswordBlur, onSumbit, isSubmitting, isTooManyAttempts}
}