import type { App } from 'vue';
import _IconFormatBrush from './icon-format-brush.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFormatBrush.name = getComponentsPrefix() + _IconFormatBrush.name;

const IconFormatBrush = Object.assign(_IconFormatBrush, {
  install: (app: App) => {
    app.component(_IconFormatBrush.name, _IconFormatBrush);
  }
});

export default IconFormatBrush;