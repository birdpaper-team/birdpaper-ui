import type { App } from 'vue';
import _IconSortAsc from './icon-sort-asc.vue';

const IconSortAsc = Object.assign(_IconSortAsc, {
  install: (app: App) => {
    app.component(_IconSortAsc.name, _IconSortAsc);
  }
});

export default IconSortAsc;