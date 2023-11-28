import type { App } from 'vue';
import _IconDeeplink from './icon-deeplink.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDeeplink.name = getComponentsPrefix() + _IconDeeplink.name;

const IconDeeplink = Object.assign(_IconDeeplink, {
  install: (app: App) => {
    app.component(_IconDeeplink.name, _IconDeeplink);
  }
});

export default IconDeeplink;