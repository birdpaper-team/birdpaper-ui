import type { App } from 'vue';
import _IconScrewdriver from './icon-screwdriver.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconScrewdriver.name = getComponentsPrefix() + _IconScrewdriver.name;

const IconScrewdriver = Object.assign(_IconScrewdriver, {
  install: (app: App) => {
    app.component(_IconScrewdriver.name, _IconScrewdriver);
  }
});

export default IconScrewdriver;