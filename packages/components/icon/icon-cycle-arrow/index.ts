import type { App } from 'vue';
import _IconCycleArrow from './icon-cycle-arrow.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCycleArrow.name = getComponentsPrefix() + _IconCycleArrow.name;

const IconCycleArrow = Object.assign(_IconCycleArrow, {
  install: (app: App) => {
    app.component(_IconCycleArrow.name, _IconCycleArrow);
  }
});

export default IconCycleArrow;