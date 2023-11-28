import type { App } from 'vue';
import _IconVacuumCleaner from './icon-vacuum-cleaner.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconVacuumCleaner.name = getComponentsPrefix() + _IconVacuumCleaner.name;

const IconVacuumCleaner = Object.assign(_IconVacuumCleaner, {
  install: (app: App) => {
    app.component(_IconVacuumCleaner.name, _IconVacuumCleaner);
  }
});

export default IconVacuumCleaner;