import type { App } from 'vue';
import _IconBad from './icon-bad.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBad.name = getComponentsPrefix() + _IconBad.name;

const IconBad = Object.assign(_IconBad, {
  install: (app: App) => {
    app.component(_IconBad.name, _IconBad);
  }
});

export default IconBad;