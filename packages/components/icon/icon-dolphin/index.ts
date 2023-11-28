import type { App } from 'vue';
import _IconDolphin from './icon-dolphin.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDolphin.name = getComponentsPrefix() + _IconDolphin.name;

const IconDolphin = Object.assign(_IconDolphin, {
  install: (app: App) => {
    app.component(_IconDolphin.name, _IconDolphin);
  }
});

export default IconDolphin;