import type { App } from 'vue';
import _IconFileEditing from './icon-file-editing.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileEditing.name = getComponentsPrefix() + _IconFileEditing.name;

const IconFileEditing = Object.assign(_IconFileEditing, {
  install: (app: App) => {
    app.component(_IconFileEditing.name, _IconFileEditing);
  }
});

export default IconFileEditing;