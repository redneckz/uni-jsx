import '@redneckz/uni-jsx/lib/setup.vue';
import { createApp } from 'vue';

import('./App.vue').then(({ default: App }) => {
  createApp(App).mount('#app');
});
