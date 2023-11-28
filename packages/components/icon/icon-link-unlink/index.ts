import type { App } from 'vue';
import _IconLinkUnlink from './icon-link-unlink.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkUnlink.name = getComponentsPrefix() + _IconLinkUnlink.name;

const IconLinkUnlink = Object.assign(_IconLinkUnlink, {
  install: (app: App) => {
    app.component(_IconLinkUnlink.name, _IconLinkUnlink);
  }
});

export default IconLinkUnlink;