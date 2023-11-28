import type { App } from 'vue';
import _IconBrakePads from './icon-brake-pads.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBrakePads.name = getComponentsPrefix() + _IconBrakePads.name;

const IconBrakePads = Object.assign(_IconBrakePads, {
  install: (app: App) => {
    app.component(_IconBrakePads.name, _IconBrakePads);
  }
});

export default IconBrakePads;