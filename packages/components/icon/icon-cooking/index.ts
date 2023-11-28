import type { App } from 'vue';
import _IconCooking from './icon-cooking.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCooking.name = getComponentsPrefix() + _IconCooking.name;

const IconCooking = Object.assign(_IconCooking, {
  install: (app: App) => {
    app.component(_IconCooking.name, _IconCooking);
  }
});

export default IconCooking;