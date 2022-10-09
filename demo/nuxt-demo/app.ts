import '@redneckz/uni-jsx/lib/setup.vue';
import { h } from 'vue';
import App from './main.vue';

export default defineComponent({
  setup() {
    return () => h(App);
  }
});
