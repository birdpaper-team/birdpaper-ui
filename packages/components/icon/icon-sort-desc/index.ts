import type { App } from 'vue';
import _IconSortDesc from './icon-sort-desc.vue';

const IconSortDesc = Object.assign(_IconSortDesc, {
  install: (app: App) => {
    app.component(_IconSortDesc.name, _IconSortDesc);
  }
});

export default IconSortDesc;