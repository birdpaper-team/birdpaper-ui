import type { App } from 'vue';
import _IconBrowserChrome from './icon-browser-chrome.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBrowserChrome.name = getComponentsPrefix() + _IconBrowserChrome.name;

const IconBrowserChrome = Object.assign(_IconBrowserChrome, {
  install: (app: App) => {
    app.component(_IconBrowserChrome.name, _IconBrowserChrome);
  }
});

export default IconBrowserChrome;