import type { App } from 'vue';
import _IconWebPage from './icon-web-page.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWebPage.name = getComponentsPrefix() + _IconWebPage.name;

const IconWebPage = Object.assign(_IconWebPage, {
  install: (app: App) => {
    app.component(_IconWebPage.name, _IconWebPage);
  }
});

export default IconWebPage;