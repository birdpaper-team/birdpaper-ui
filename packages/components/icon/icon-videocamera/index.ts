import type { App } from 'vue';
import _IconVideocamera from './icon-videocamera.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVideocamera.name = getComponentsPrefix() + _IconVideocamera.name;

const IconVideocamera = Object.assign(_IconVideocamera, {
  install: (app: App) => {
    app.component(_IconVideocamera.name, _IconVideocamera);
  }
});

export default IconVideocamera;