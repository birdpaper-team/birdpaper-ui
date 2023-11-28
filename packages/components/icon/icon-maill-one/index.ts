import type { App } from 'vue';
import _IconMaillOne from './icon-maill-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMaillOne.name = getComponentsPrefix() + _IconMaillOne.name;

const IconMaillOne = Object.assign(_IconMaillOne, {
  install: (app: App) => {
    app.component(_IconMaillOne.name, _IconMaillOne);
  }
});

export default IconMaillOne;