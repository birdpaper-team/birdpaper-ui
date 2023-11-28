import type { App } from 'vue';
import _IconChip from './icon-chip.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChip.name = getComponentsPrefix() + _IconChip.name;

const IconChip = Object.assign(_IconChip, {
  install: (app: App) => {
    app.component(_IconChip.name, _IconChip);
  }
});

export default IconChip;