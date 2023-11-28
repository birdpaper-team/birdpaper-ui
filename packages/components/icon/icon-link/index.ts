import type { App } from 'vue';
import _IconLink from './icon-link.vue';

const IconLink = Object.assign(_IconLink, {
  install: (app: App) => {
    app.component(_IconLink.name, _IconLink);
  }
});

export default IconLink;