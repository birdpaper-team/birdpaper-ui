import type { App } from 'vue';
import _IconSandwich from './icon-sandwich.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSandwich.name = getComponentsPrefix() + _IconSandwich.name;

const IconSandwich = Object.assign(_IconSandwich, {
  install: (app: App) => {
    app.component(_IconSandwich.name, _IconSandwich);
  }
});

export default IconSandwich;