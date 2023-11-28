import type { App } from 'vue';
import _IconClothesBriefs from './icon-clothes-briefs.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconClothesBriefs.name = getComponentsPrefix() + _IconClothesBriefs.name;

const IconClothesBriefs = Object.assign(_IconClothesBriefs, {
  install: (app: App) => {
    app.component(_IconClothesBriefs.name, _IconClothesBriefs);
  }
});

export default IconClothesBriefs;