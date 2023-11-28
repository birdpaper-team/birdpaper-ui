import type { App } from 'vue';
import _IconHairBrush from './icon-hair-brush.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHairBrush.name = getComponentsPrefix() + _IconHairBrush.name;

const IconHairBrush = Object.assign(_IconHairBrush, {
  install: (app: App) => {
    app.component(_IconHairBrush.name, _IconHairBrush);
  }
});

export default IconHairBrush;