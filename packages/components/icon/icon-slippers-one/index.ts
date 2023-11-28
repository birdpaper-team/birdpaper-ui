import type { App } from 'vue';
import _IconSlippersOne from './icon-slippers-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSlippersOne.name = getComponentsPrefix() + _IconSlippersOne.name;

const IconSlippersOne = Object.assign(_IconSlippersOne, {
  install: (app: App) => {
    app.component(_IconSlippersOne.name, _IconSlippersOne);
  }
});

export default IconSlippersOne;