import type { App } from 'vue';
import _IconChili from './icon-chili.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChili.name = getComponentsPrefix() + _IconChili.name;

const IconChili = Object.assign(_IconChili, {
  install: (app: App) => {
    app.component(_IconChili.name, _IconChili);
  }
});

export default IconChili;