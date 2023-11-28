import type { App } from 'vue';
import _IconEndless from './icon-endless.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEndless.name = getComponentsPrefix() + _IconEndless.name;

const IconEndless = Object.assign(_IconEndless, {
  install: (app: App) => {
    app.component(_IconEndless.name, _IconEndless);
  }
});

export default IconEndless;