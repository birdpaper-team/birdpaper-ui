import type { App } from 'vue';
import _IconMilkOne from './icon-milk-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMilkOne.name = getComponentsPrefix() + _IconMilkOne.name;

const IconMilkOne = Object.assign(_IconMilkOne, {
  install: (app: App) => {
    app.component(_IconMilkOne.name, _IconMilkOne);
  }
});

export default IconMilkOne;