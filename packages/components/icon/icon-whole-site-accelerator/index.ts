import type { App } from 'vue';
import _IconWholeSiteAccelerator from './icon-whole-site-accelerator.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWholeSiteAccelerator.name = getComponentsPrefix() + _IconWholeSiteAccelerator.name;

const IconWholeSiteAccelerator = Object.assign(_IconWholeSiteAccelerator, {
  install: (app: App) => {
    app.component(_IconWholeSiteAccelerator.name, _IconWholeSiteAccelerator);
  }
});

export default IconWholeSiteAccelerator;