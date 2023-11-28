import type { App } from 'vue';
import _IconLarkOne from './icon-lark-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLarkOne.name = getComponentsPrefix() + _IconLarkOne.name;

const IconLarkOne = Object.assign(_IconLarkOne, {
  install: (app: App) => {
    app.component(_IconLarkOne.name, _IconLarkOne);
  }
});

export default IconLarkOne;