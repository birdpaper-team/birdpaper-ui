import type { App } from 'vue';
import _IconDifferenceSet from './icon-difference-set.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDifferenceSet.name = getComponentsPrefix() + _IconDifferenceSet.name;

const IconDifferenceSet = Object.assign(_IconDifferenceSet, {
  install: (app: App) => {
    app.component(_IconDifferenceSet.name, _IconDifferenceSet);
  }
});

export default IconDifferenceSet;