import type { App } from 'vue';
import _IconEndocrine from './icon-endocrine.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEndocrine.name = getComponentsPrefix() + _IconEndocrine.name;

const IconEndocrine = Object.assign(_IconEndocrine, {
  install: (app: App) => {
    app.component(_IconEndocrine.name, _IconEndocrine);
  }
});

export default IconEndocrine;