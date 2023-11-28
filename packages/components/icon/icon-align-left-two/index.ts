import type { App } from 'vue';
import _IconAlignLeftTwo from './icon-align-left-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAlignLeftTwo.name = getComponentsPrefix() + _IconAlignLeftTwo.name;

const IconAlignLeftTwo = Object.assign(_IconAlignLeftTwo, {
  install: (app: App) => {
    app.component(_IconAlignLeftTwo.name, _IconAlignLeftTwo);
  }
});

export default IconAlignLeftTwo;