import type { App } from 'vue';
import _IconBedside from './icon-bedside.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBedside.name = getComponentsPrefix() + _IconBedside.name;

const IconBedside = Object.assign(_IconBedside, {
  install: (app: App) => {
    app.component(_IconBedside.name, _IconBedside);
  }
});

export default IconBedside;