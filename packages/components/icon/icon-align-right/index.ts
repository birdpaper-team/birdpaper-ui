import type { App } from 'vue';
import _IconAlignRight from './icon-align-right.vue';

const IconAlignRight = Object.assign(_IconAlignRight, {
  install: (app: App) => {
    app.component(_IconAlignRight.name, _IconAlignRight);
  }
});

export default IconAlignRight;