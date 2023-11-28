import type { App } from 'vue';
import _IconHangerOne from './icon-hanger-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHangerOne.name = getComponentsPrefix() + _IconHangerOne.name;

const IconHangerOne = Object.assign(_IconHangerOne, {
  install: (app: App) => {
    app.component(_IconHangerOne.name, _IconHangerOne);
  }
});

export default IconHangerOne;