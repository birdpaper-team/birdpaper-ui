import type { App } from 'vue';
import _IconMinusTheBottom from './icon-minus-the-bottom.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMinusTheBottom.name = getComponentsPrefix() + _IconMinusTheBottom.name;

const IconMinusTheBottom = Object.assign(_IconMinusTheBottom, {
  install: (app: App) => {
    app.component(_IconMinusTheBottom.name, _IconMinusTheBottom);
  }
});

export default IconMinusTheBottom;