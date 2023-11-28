import type { App } from 'vue';
import _IconUndo from './icon-undo.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUndo.name = getComponentsPrefix() + _IconUndo.name;

const IconUndo = Object.assign(_IconUndo, {
  install: (app: App) => {
    app.component(_IconUndo.name, _IconUndo);
  }
});

export default IconUndo;