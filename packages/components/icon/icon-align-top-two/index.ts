import type { App } from 'vue';
import _IconAlignTopTwo from './icon-align-top-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignTopTwo.name = getComponentsPrefix() + _IconAlignTopTwo.name;

const IconAlignTopTwo = Object.assign(_IconAlignTopTwo, {
  install: (app: App) => {
    app.component(_IconAlignTopTwo.name, _IconAlignTopTwo);
  }
});

export default IconAlignTopTwo;