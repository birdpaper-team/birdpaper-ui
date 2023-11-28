import type { App } from 'vue';
import _IconMitsubishi from './icon-mitsubishi.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMitsubishi.name = getComponentsPrefix() + _IconMitsubishi.name;

const IconMitsubishi = Object.assign(_IconMitsubishi, {
  install: (app: App) => {
    app.component(_IconMitsubishi.name, _IconMitsubishi);
  }
});

export default IconMitsubishi;