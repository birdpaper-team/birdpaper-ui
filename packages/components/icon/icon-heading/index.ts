import type { App } from 'vue';
import _IconHeading from './icon-heading.vue';

const IconHeading = Object.assign(_IconHeading, {
  install: (app: App) => {
    app.component(_IconHeading.name, _IconHeading);
  }
});

export default IconHeading;