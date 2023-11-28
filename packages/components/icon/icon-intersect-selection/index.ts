import type { App } from 'vue';
import _IconIntersectSelection from './icon-intersect-selection.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIntersectSelection.name = getComponentsPrefix() + _IconIntersectSelection.name;

const IconIntersectSelection = Object.assign(_IconIntersectSelection, {
  install: (app: App) => {
    app.component(_IconIntersectSelection.name, _IconIntersectSelection);
  }
});

export default IconIntersectSelection;