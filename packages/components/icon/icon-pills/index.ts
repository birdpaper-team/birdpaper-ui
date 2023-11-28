import type { App } from 'vue';
import _IconPills from './icon-pills.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPills.name = getComponentsPrefix() + _IconPills.name;

const IconPills = Object.assign(_IconPills, {
  install: (app: App) => {
    app.component(_IconPills.name, _IconPills);
  }
});

export default IconPills;