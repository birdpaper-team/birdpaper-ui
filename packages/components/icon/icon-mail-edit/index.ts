import type { App } from 'vue';
import _IconMailEdit from './icon-mail-edit.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMailEdit.name = getComponentsPrefix() + _IconMailEdit.name;

const IconMailEdit = Object.assign(_IconMailEdit, {
  install: (app: App) => {
    app.component(_IconMailEdit.name, _IconMailEdit);
  }
});

export default IconMailEdit;