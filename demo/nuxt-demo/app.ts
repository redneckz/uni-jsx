import { setup } from '@redneckz/uni-jsx';
import { h } from 'vue';
import App from './main.vue';

setup.vue(h);

export default defineComponent({
  setup() {
    return () => h(App);
  }
});
