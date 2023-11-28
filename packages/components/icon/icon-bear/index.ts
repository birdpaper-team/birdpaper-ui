import type { App } from 'vue';
import _IconBear from './icon-bear.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBear.name = getComponentsPrefix() + _IconBear.name;

const IconBear = Object.assign(_IconBear, {
  install: (app: App) => {
    app.component(_IconBear.name, _IconBear);
  }
});

export default IconBear;