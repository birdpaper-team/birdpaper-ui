import type { App } from 'vue';
import _IconUp from './icon-up.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUp.name = getComponentsPrefix() + _IconUp.name;

const IconUp = Object.assign(_IconUp, {
  install: (app: App) => {
    app.component(_IconUp.name, _IconUp);
  }
});

export default IconUp;