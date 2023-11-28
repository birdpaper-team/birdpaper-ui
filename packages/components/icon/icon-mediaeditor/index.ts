import type { App } from 'vue';
import _IconMediaeditor from './icon-mediaeditor.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMediaeditor.name = getComponentsPrefix() + _IconMediaeditor.name;

const IconMediaeditor = Object.assign(_IconMediaeditor, {
  install: (app: App) => {
    app.component(_IconMediaeditor.name, _IconMediaeditor);
  }
});

export default IconMediaeditor;