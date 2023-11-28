import type { App } from 'vue';
import _IconCrownThree from './icon-crown-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCrownThree.name = getComponentsPrefix() + _IconCrownThree.name;

const IconCrownThree = Object.assign(_IconCrownThree, {
  install: (app: App) => {
    app.component(_IconCrownThree.name, _IconCrownThree);
  }
});

export default IconCrownThree;