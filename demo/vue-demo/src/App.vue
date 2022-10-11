<template>
  <h1>Vue with unified components</h1>
  <hr />
  <text-block ref="text" :primary="primary" :secondary="secondary" :dark="true" @cite="debugEvent">
    <cite>http://www.asimovonline.com</cite>
  </text-block>
  <primary-button @click="debugEvent">Click me</primary-button>
  <hr />
  <test-page />
</template>

<script lang="ts">
import { PrimaryButton, TestPage, TextBlock } from '@demo/ui-kit';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    TestPage,
    TextBlock,
    PrimaryButton
  },
  mounted() {
    console.log(this.$refs.text);
  },
  data() {
    return {
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
