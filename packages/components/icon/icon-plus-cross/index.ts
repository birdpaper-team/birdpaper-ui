import type { App } from 'vue';
import _IconPlusCross from './icon-plus-cross.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlusCross.name = getComponentsPrefix() + _IconPlusCross.name;

const IconPlusCross = Object.assign(_IconPlusCross, {
  install: (app: App) => {
    app.component(_IconPlusCross.name, _IconPlusCross);
  }
});

export default IconPlusCross;