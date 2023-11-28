import type { App } from 'vue';
import _IconCloudLine from './icon-cloud-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCloudLine.name = getComponentsPrefix() + _IconCloudLine.name;

const IconCloudLine = Object.assign(_IconCloudLine, {
  install: (app: App) => {
    app.component(_IconCloudLine.name, _IconCloudLine);
  }
});

export default IconCloudLine;