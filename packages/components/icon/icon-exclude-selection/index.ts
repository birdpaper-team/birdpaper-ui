import type { App } from 'vue';
import _IconExcludeSelection from './icon-exclude-selection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExcludeSelection.name = getComponentsPrefix() + _IconExcludeSelection.name;

const IconExcludeSelection = Object.assign(_IconExcludeSelection, {
  install: (app: App) => {
    app.component(_IconExcludeSelection.name, _IconExcludeSelection);
  }
});

export default IconExcludeSelection;