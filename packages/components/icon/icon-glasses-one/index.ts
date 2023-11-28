import type { App } from 'vue';
import _IconGlassesOne from './icon-glasses-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGlassesOne.name = getComponentsPrefix() + _IconGlassesOne.name;

const IconGlassesOne = Object.assign(_IconGlassesOne, {
  install: (app: App) => {
    app.component(_IconGlassesOne.name, _IconGlassesOne);
  }
});

export default IconGlassesOne;