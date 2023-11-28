import type { App } from 'vue';
import _IconBytedanceApplets from './icon-bytedance-applets.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBytedanceApplets.name = getComponentsPrefix() + _IconBytedanceApplets.name;

const IconBytedanceApplets = Object.assign(_IconBytedanceApplets, {
  install: (app: App) => {
    app.component(_IconBytedanceApplets.name, _IconBytedanceApplets);
  }
});

export default IconBytedanceApplets;