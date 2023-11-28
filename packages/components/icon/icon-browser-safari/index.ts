import type { App } from 'vue';
import _IconBrowserSafari from './icon-browser-safari.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBrowserSafari.name = getComponentsPrefix() + _IconBrowserSafari.name;

const IconBrowserSafari = Object.assign(_IconBrowserSafari, {
  install: (app: App) => {
    app.component(_IconBrowserSafari.name, _IconBrowserSafari);
  }
});

export default IconBrowserSafari;