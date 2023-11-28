import type { App } from 'vue';
import _IconHoneyOne from './icon-honey-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHoneyOne.name = getComponentsPrefix() + _IconHoneyOne.name;

const IconHoneyOne = Object.assign(_IconHoneyOne, {
  install: (app: App) => {
    app.component(_IconHoneyOne.name, _IconHoneyOne);
  }
});

export default IconHoneyOne;