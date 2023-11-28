import type { App } from 'vue';
import _IconFrenchFries from './icon-french-fries.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFrenchFries.name = getComponentsPrefix() + _IconFrenchFries.name;

const IconFrenchFries = Object.assign(_IconFrenchFries, {
  install: (app: App) => {
    app.component(_IconFrenchFries.name, _IconFrenchFries);
  }
});

export default IconFrenchFries;