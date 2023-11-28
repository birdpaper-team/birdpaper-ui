import type { App } from 'vue';
import _IconArithmeticOne from './icon-arithmetic-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArithmeticOne.name = getComponentsPrefix() + _IconArithmeticOne.name;

const IconArithmeticOne = Object.assign(_IconArithmeticOne, {
  install: (app: App) => {
    app.component(_IconArithmeticOne.name, _IconArithmeticOne);
  }
});

export default IconArithmeticOne;