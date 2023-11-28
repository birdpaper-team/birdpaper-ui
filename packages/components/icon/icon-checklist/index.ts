import type { App } from 'vue';
import _IconChecklist from './icon-checklist.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChecklist.name = getComponentsPrefix() + _IconChecklist.name;

const IconChecklist = Object.assign(_IconChecklist, {
  install: (app: App) => {
    app.component(_IconChecklist.name, _IconChecklist);
  }
});

export default IconChecklist;