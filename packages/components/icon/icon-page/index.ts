import type { App } from 'vue';
import _IconPage from './icon-page.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPage.name = getComponentsPrefix() + _IconPage.name;

const IconPage = Object.assign(_IconPage, {
  install: (app: App) => {
    app.component(_IconPage.name, _IconPage);
  }
});

export default IconPage;