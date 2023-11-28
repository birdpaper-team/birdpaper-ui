import type { App } from 'vue';
import _IconSelected from './icon-selected.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSelected.name = getComponentsPrefix() + _IconSelected.name;

const IconSelected = Object.assign(_IconSelected, {
  install: (app: App) => {
    app.component(_IconSelected.name, _IconSelected);
  }
});

export default IconSelected;