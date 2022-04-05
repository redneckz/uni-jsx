<template>
  <h1>Vue with unified components</h1>
  <h2>TextBlock</h2>
  <hr />
  <text-block ref="text" :primary="primary" :secondary="secondary" @cite="debugEvent">
    <cite>http://www.asimovonline.com</cite>
  </text-block>
  <h2>PrimaryButton</h2>
  <hr />
  <primary-button @click="debugEvent">
    Click me
  </primary-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TextBlock, PrimaryButton } from '@demo/ui-kit';

export default defineComponent({
  name: 'App',
  components: {
    TextBlock,
    PrimaryButton
  },
  mounted() {
    console.log(this.$refs.text);
  },
  data() {
    return {
      primary: 'Айзек Азимов',
      secondary: `Нельзя сказать человеку: «Ты можешь творить.
Так давай, твори». Гораздо вернее подождать, пока он
сам не скажет: «Я могу творить, и я буду творить, хотите
вы этого или нет».`
    };
  },
  methods: {
    debugEvent(event: unknown) {
      console.log(event);
    }
  }
});
</script>
