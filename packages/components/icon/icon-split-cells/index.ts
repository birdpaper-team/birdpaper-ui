import type { App } from 'vue';
import _IconSplitCells from './icon-split-cells.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSplitCells.name = getComponentsPrefix() + _IconSplitCells.name;

const IconSplitCells = Object.assign(_IconSplitCells, {
  install: (app: App) => {
    app.component(_IconSplitCells.name, _IconSplitCells);
  }
});

export default IconSplitCells;