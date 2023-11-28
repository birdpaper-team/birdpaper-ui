import type { App } from 'vue';
import _IconTwoSemicircles from './icon-two-semicircles.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTwoSemicircles.name = getComponentsPrefix() + _IconTwoSemicircles.name;

const IconTwoSemicircles = Object.assign(_IconTwoSemicircles, {
  install: (app: App) => {
    app.component(_IconTwoSemicircles.name, _IconTwoSemicircles);
  }
});

export default IconTwoSemicircles;