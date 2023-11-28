import type { App } from 'vue';
import _IconWritingFluently from './icon-writing-fluently.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWritingFluently.name = getComponentsPrefix() + _IconWritingFluently.name;

const IconWritingFluently = Object.assign(_IconWritingFluently, {
  install: (app: App) => {
    app.component(_IconWritingFluently.name, _IconWritingFluently);
  }
});

export default IconWritingFluently;