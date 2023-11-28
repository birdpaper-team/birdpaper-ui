import type { App } from 'vue';
import _IconBooth from './icon-booth.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBooth.name = getComponentsPrefix() + _IconBooth.name;

const IconBooth = Object.assign(_IconBooth, {
  install: (app: App) => {
    app.component(_IconBooth.name, _IconBooth);
  }
});

export default IconBooth;