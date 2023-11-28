import type { App } from 'vue';
import _IconNailPolish from './icon-nail-polish.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNailPolish.name = getComponentsPrefix() + _IconNailPolish.name;

const IconNailPolish = Object.assign(_IconNailPolish, {
  install: (app: App) => {
    app.component(_IconNailPolish.name, _IconNailPolish);
  }
});

export default IconNailPolish;