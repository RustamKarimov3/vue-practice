import { useField, useForm } from "vee-validate";
import * as yup from 'yup'

export const useRequestForm = (fn) => {
    const {handleSubmit} = useForm({
        initialValues: {
            status: 'active'
        }
    });

    const {value: name, errorMessage: nameError, handleBlur: handleNameBlur} = useField('name', yup.string().required('Введите имя'));
    const {value: phone, errorMessage: phoneError, handleBlur: handlePhoneBlur} = useField('phone', yup.string().required('Введите телефон'));
    const {value: status, errorMessage: statusError, handleBlur: handleStatusBlur} = useField('status', yup.string().required('Введите статус'));
    const {value: sum, errorMessage: sumError, handleBlur: handleSumBlur} = useField('sum', yup.string().required('Введите сумму'));

    const onSubmit = handleSubmit(async (values) => {
        console.log(values)
        fn(values)
        // const isSuccess = await store.dispatch('auth/login', values);

        // if (isSuccess) {
        //     router.push('/');
        // }
    })


    return {
        name, nameError, handleNameBlur,
        phone, phoneError, handlePhoneBlur,
        status, statusError, handleStatusBlur,
        sum, sumError, handleSumBlur,
        onSubmit}
}