import type { App } from 'vue';
import _IconLinkUnlink from './icon-link-unlink.vue';

const IconLinkUnlink = Object.assign(_IconLinkUnlink, {
  install: (app: App) => {
    app.component(_IconLinkUnlink.name, _IconLinkUnlink);
  }
});

export default IconLinkUnlink;