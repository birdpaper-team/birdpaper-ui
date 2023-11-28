import type { App } from 'vue';
import _IconInformationFill from './icon-information-fill.vue';

const IconInformationFill = Object.assign(_IconInformationFill, {
  install: (app: App) => {
    app.component(_IconInformationFill.name, _IconInformationFill);
  }
});

export default IconInformationFill;