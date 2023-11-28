import type { App } from 'vue';
import _IconCompression from './icon-compression.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCompression.name = getComponentsPrefix() + _IconCompression.name;

const IconCompression = Object.assign(_IconCompression, {
  install: (app: App) => {
    app.component(_IconCompression.name, _IconCompression);
  }
});

export default IconCompression;