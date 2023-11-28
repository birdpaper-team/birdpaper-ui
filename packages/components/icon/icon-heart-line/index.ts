import type { App } from 'vue';
import _IconHeartLine from './icon-heart-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeartLine.name = getComponentsPrefix() + _IconHeartLine.name;

const IconHeartLine = Object.assign(_IconHeartLine, {
  install: (app: App) => {
    app.component(_IconHeartLine.name, _IconHeartLine);
  }
});

export default IconHeartLine;