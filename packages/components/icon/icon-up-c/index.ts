import type { App } from 'vue';
import _IconUpC from './icon-up-c.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUpC.name = getComponentsPrefix() + _IconUpC.name;

const IconUpC = Object.assign(_IconUpC, {
  install: (app: App) => {
    app.component(_IconUpC.name, _IconUpC);
  }
});

export default IconUpC;