import type { App } from 'vue';
import _IconHangerTwo from './icon-hanger-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHangerTwo.name = getComponentsPrefix() + _IconHangerTwo.name;

const IconHangerTwo = Object.assign(_IconHangerTwo, {
  install: (app: App) => {
    app.component(_IconHangerTwo.name, _IconHangerTwo);
  }
});

export default IconHangerTwo;