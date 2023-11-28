import type { App } from 'vue';
import _IconText from './icon-text.vue';

const IconText = Object.assign(_IconText, {
  install: (app: App) => {
    app.component(_IconText.name, _IconText);
  }
});

export default IconText;