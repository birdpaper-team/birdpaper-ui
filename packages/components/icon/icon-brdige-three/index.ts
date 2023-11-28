import type { App } from 'vue';
import _IconBrdigeThree from './icon-brdige-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBrdigeThree.name = getComponentsPrefix() + _IconBrdigeThree.name;

const IconBrdigeThree = Object.assign(_IconBrdigeThree, {
  install: (app: App) => {
    app.component(_IconBrdigeThree.name, _IconBrdigeThree);
  }
});

export default IconBrdigeThree;