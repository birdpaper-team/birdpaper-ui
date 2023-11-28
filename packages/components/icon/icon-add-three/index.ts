import type { App } from 'vue';
import _IconAddThree from './icon-add-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddThree.name = getComponentsPrefix() + _IconAddThree.name;

const IconAddThree = Object.assign(_IconAddThree, {
  install: (app: App) => {
    app.component(_IconAddThree.name, _IconAddThree);
  }
});

export default IconAddThree;