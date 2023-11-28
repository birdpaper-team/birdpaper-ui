import type { App } from 'vue';
import _IconGoOn from './icon-go-on.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGoOn.name = getComponentsPrefix() + _IconGoOn.name;

const IconGoOn = Object.assign(_IconGoOn, {
  install: (app: App) => {
    app.component(_IconGoOn.name, _IconGoOn);
  }
});

export default IconGoOn;