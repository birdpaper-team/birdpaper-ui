import type { App } from 'vue';
import _IconLoaderLine from './icon-loader-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLoaderLine.name = getComponentsPrefix() + _IconLoaderLine.name;

const IconLoaderLine = Object.assign(_IconLoaderLine, {
  install: (app: App) => {
    app.component(_IconLoaderLine.name, _IconLoaderLine);
  }
});

export default IconLoaderLine;