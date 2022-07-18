import { createApp, h } from 'vue';
import { setup } from '@redneckz/uni-jsx';

setup.vue(h);

import('./App.vue').then(({ default: App }) => {
  createApp(App).mount('#app');
});
