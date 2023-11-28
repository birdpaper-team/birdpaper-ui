import type { App } from 'vue';
import _IconBoy from './icon-boy.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBoy.name = getComponentsPrefix() + _IconBoy.name;

const IconBoy = Object.assign(_IconBoy, {
  install: (app: App) => {
    app.component(_IconBoy.name, _IconBoy);
  }
});

export default IconBoy;