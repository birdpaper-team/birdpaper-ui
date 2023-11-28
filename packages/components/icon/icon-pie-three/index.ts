import type { App } from 'vue';
import _IconPieThree from './icon-pie-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPieThree.name = getComponentsPrefix() + _IconPieThree.name;

const IconPieThree = Object.assign(_IconPieThree, {
  install: (app: App) => {
    app.component(_IconPieThree.name, _IconPieThree);
  }
});

export default IconPieThree;