import type { App } from 'vue';
import _IconRice from './icon-rice.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRice.name = getComponentsPrefix() + _IconRice.name;

const IconRice = Object.assign(_IconRice, {
  install: (app: App) => {
    app.component(_IconRice.name, _IconRice);
  }
});

export default IconRice;