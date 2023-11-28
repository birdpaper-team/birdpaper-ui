import type { App } from 'vue';
import _IconTentBanner from './icon-tent-banner.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTentBanner.name = getComponentsPrefix() + _IconTentBanner.name;

const IconTentBanner = Object.assign(_IconTentBanner, {
  install: (app: App) => {
    app.component(_IconTentBanner.name, _IconTentBanner);
  }
});

export default IconTentBanner;