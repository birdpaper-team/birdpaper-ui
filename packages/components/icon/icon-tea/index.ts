import type { App } from 'vue';
import _IconTea from './icon-tea.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTea.name = getComponentsPrefix() + _IconTea.name;

const IconTea = Object.assign(_IconTea, {
  install: (app: App) => {
    app.component(_IconTea.name, _IconTea);
  }
});

export default IconTea;