import type { App } from 'vue';
import _IconLanding from './icon-landing.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLanding.name = getComponentsPrefix() + _IconLanding.name;

const IconLanding = Object.assign(_IconLanding, {
  install: (app: App) => {
    app.component(_IconLanding.name, _IconLanding);
  }
});

export default IconLanding;