import type { App } from 'vue';
import _IconEyeLine from './icon-eye-line.vue';

const IconEyeLine = Object.assign(_IconEyeLine, {
  install: (app: App) => {
    app.component(_IconEyeLine.name, _IconEyeLine);
  }
});

export default IconEyeLine;