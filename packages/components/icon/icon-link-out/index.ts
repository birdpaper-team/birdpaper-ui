import type { App } from 'vue';
import _IconLinkOut from './icon-link-out.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkOut.name = getComponentsPrefix() + _IconLinkOut.name;

const IconLinkOut = Object.assign(_IconLinkOut, {
  install: (app: App) => {
    app.component(_IconLinkOut.name, _IconLinkOut);
  }
});

export default IconLinkOut;