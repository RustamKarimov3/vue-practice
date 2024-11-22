<template>
  <app-page title="Помощь" back>
    <question-item v-for="item in questions" :title="item.title" :text="item.text" :key="item.title"></question-item>
  </app-page>
</template>

<script>

import { useRoute } from 'vue-router';
import AppPage from '../components/ui/AppPage.vue';
import QuestionItem from '../components/question/QuestionItem.vue';

export default {
  components: {AppPage, QuestionItem},
  setup() {
    const route = useRoute();

    const questions = [
      {title: 'Что есть в данной системе?', text: 'Тут есть все, для того, чтобы смотреть, какие заявки человек добавлял'},
      {title: 'Как тут работает авторизация?', text: 'Все реализовано через Firebase'}
    ]

    return {questions}
  }
}
</script>