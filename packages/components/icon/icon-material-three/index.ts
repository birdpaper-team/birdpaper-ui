import type { App } from 'vue';
import _IconMaterialThree from './icon-material-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMaterialThree.name = getComponentsPrefix() + _IconMaterialThree.name;

const IconMaterialThree = Object.assign(_IconMaterialThree, {
  install: (app: App) => {
    app.component(_IconMaterialThree.name, _IconMaterialThree);
  }
});

export default IconMaterialThree;