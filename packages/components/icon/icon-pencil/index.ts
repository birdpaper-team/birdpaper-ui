import type { App } from 'vue';
import _IconPencil from './icon-pencil.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPencil.name = getComponentsPrefix() + _IconPencil.name;

const IconPencil = Object.assign(_IconPencil, {
  install: (app: App) => {
    app.component(_IconPencil.name, _IconPencil);
  }
});

export default IconPencil;