import type { App } from 'vue';
import _IconRemind from './icon-remind.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRemind.name = getComponentsPrefix() + _IconRemind.name;

const IconRemind = Object.assign(_IconRemind, {
  install: (app: App) => {
    app.component(_IconRemind.name, _IconRemind);
  }
});

export default IconRemind;