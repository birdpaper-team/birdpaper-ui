import type { App } from 'vue';
import _IconSteeringWheel from './icon-steering-wheel.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSteeringWheel.name = getComponentsPrefix() + _IconSteeringWheel.name;

const IconSteeringWheel = Object.assign(_IconSteeringWheel, {
  install: (app: App) => {
    app.component(_IconSteeringWheel.name, _IconSteeringWheel);
  }
});

export default IconSteeringWheel;