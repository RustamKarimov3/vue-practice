<template>
    <div class="breadcrumbs" v-if="back"><router-link to="/">Вернуться на главную</router-link></div>
    <div class="card">
        <h1 class="card-title">{{ title }} <slot name="header"></slot></h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
            },
            back: {
                type: Boolean,
                default: false
            }
        },
        setup(props) {

            console.log(props)
            document.title = props.title;
        }
    }
</script>

<style lang="scss" scoped>

</style>