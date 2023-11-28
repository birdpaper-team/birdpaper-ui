import type { App } from 'vue';
import _IconPushpinLine from './icon-pushpin-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPushpinLine.name = getComponentsPrefix() + _IconPushpinLine.name;

const IconPushpinLine = Object.assign(_IconPushpinLine, {
  install: (app: App) => {
    app.component(_IconPushpinLine.name, _IconPushpinLine);
  }
});

export default IconPushpinLine;