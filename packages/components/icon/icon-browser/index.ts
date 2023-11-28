import type { App } from 'vue';
import _IconBrowser from './icon-browser.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBrowser.name = getComponentsPrefix() + _IconBrowser.name;

const IconBrowser = Object.assign(_IconBrowser, {
  install: (app: App) => {
    app.component(_IconBrowser.name, _IconBrowser);
  }
});

export default IconBrowser;