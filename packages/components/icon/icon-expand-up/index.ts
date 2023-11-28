import type { App } from 'vue';
import _IconExpandUp from './icon-expand-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExpandUp.name = getComponentsPrefix() + _IconExpandUp.name;

const IconExpandUp = Object.assign(_IconExpandUp, {
  install: (app: App) => {
    app.component(_IconExpandUp.name, _IconExpandUp);
  }
});

export default IconExpandUp;