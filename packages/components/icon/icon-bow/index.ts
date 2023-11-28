import type { App } from 'vue';
import _IconBow from './icon-bow.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBow.name = getComponentsPrefix() + _IconBow.name;

const IconBow = Object.assign(_IconBow, {
  install: (app: App) => {
    app.component(_IconBow.name, _IconBow);
  }
});

export default IconBow;