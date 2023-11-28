import type { App } from 'vue';
import _IconAddWeb from './icon-add-web.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddWeb.name = getComponentsPrefix() + _IconAddWeb.name;

const IconAddWeb = Object.assign(_IconAddWeb, {
  install: (app: App) => {
    app.component(_IconAddWeb.name, _IconAddWeb);
  }
});

export default IconAddWeb;