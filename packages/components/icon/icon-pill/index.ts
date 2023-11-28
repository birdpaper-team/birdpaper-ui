import type { App } from 'vue';
import _IconPill from './icon-pill.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPill.name = getComponentsPrefix() + _IconPill.name;

const IconPill = Object.assign(_IconPill, {
  install: (app: App) => {
    app.component(_IconPill.name, _IconPill);
  }
});

export default IconPill;