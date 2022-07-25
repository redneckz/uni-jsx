<template>
  <h1>Vue with unified components</h1>
  <hr />
  <text-block ref="text" :primary="primary" :secondary="secondary" :dark="true" @cite="debugEvent">
    <cite>http://www.asimovonline.com</cite>
  </text-block>
  <primary-button @click="debugEvent">Click me</primary-button>
  <hr />
  <counter :context="contentPageContext" />
  <hr />
  <joke :context="contentPageContext" />
  <hr />
  <test-page />
</template>

<script lang="ts">
import { Counter, Joke, PrimaryButton, TestPage, TextBlock } from '@demo/ui-kit';
import { defineComponent } from 'vue';
import { contentPageContext } from './contentPageContext/contentPageContext';

export default defineComponent({
  name: 'App',
  components: {
    TestPage,
    TextBlock,
    PrimaryButton,
    Counter,
    Joke
  },
  mounted() {
    console.log(this.$refs.text);
  },
  data() {
    return {
      contentPageContext,
      primary: 'Айзек Азимов',
      secondary: [
        'Нельзя сказать человеку: «Ты можешь творить.',
        'Так давай, твори». Гораздо вернее подождать, пока он',
        'сам не скажет: «Я могу творить, и я буду творить, хотите',
        'вы этого или нет».'
      ]
    };
  },
  methods: {
    debugEvent(event: unknown) {
      console.log(event);
    }
  }
});
</script>
