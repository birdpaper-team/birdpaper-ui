import type { App } from 'vue';
import _IconNotebook from './icon-notebook.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNotebook.name = getComponentsPrefix() + _IconNotebook.name;

const IconNotebook = Object.assign(_IconNotebook, {
  install: (app: App) => {
    app.component(_IconNotebook.name, _IconNotebook);
  }
});

export default IconNotebook;