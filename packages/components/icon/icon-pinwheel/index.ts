import type { App } from 'vue';
import _IconPinwheel from './icon-pinwheel.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPinwheel.name = getComponentsPrefix() + _IconPinwheel.name;

const IconPinwheel = Object.assign(_IconPinwheel, {
  install: (app: App) => {
    app.component(_IconPinwheel.name, _IconPinwheel);
  }
});

export default IconPinwheel;