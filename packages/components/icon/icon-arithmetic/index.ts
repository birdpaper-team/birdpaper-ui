import type { App } from 'vue';
import _IconArithmetic from './icon-arithmetic.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArithmetic.name = getComponentsPrefix() + _IconArithmetic.name;

const IconArithmetic = Object.assign(_IconArithmetic, {
  install: (app: App) => {
    app.component(_IconArithmetic.name, _IconArithmetic);
  }
});

export default IconArithmetic;