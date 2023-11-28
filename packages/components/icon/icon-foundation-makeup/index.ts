import type { App } from 'vue';
import _IconFoundationMakeup from './icon-foundation-makeup.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFoundationMakeup.name = getComponentsPrefix() + _IconFoundationMakeup.name;

const IconFoundationMakeup = Object.assign(_IconFoundationMakeup, {
  install: (app: App) => {
    app.component(_IconFoundationMakeup.name, _IconFoundationMakeup);
  }
});

export default IconFoundationMakeup;