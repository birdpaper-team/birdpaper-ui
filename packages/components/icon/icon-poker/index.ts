import type { App } from 'vue';
import _IconPoker from './icon-poker.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPoker.name = getComponentsPrefix() + _IconPoker.name;

const IconPoker = Object.assign(_IconPoker, {
  install: (app: App) => {
    app.component(_IconPoker.name, _IconPoker);
  }
});

export default IconPoker;