import type { App } from 'vue';
import _IconTailoringTwo from './icon-tailoring-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTailoringTwo.name = getComponentsPrefix() + _IconTailoringTwo.name;

const IconTailoringTwo = Object.assign(_IconTailoringTwo, {
  install: (app: App) => {
    app.component(_IconTailoringTwo.name, _IconTailoringTwo);
  }
});

export default IconTailoringTwo;