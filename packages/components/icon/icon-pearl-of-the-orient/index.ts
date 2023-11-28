import type { App } from 'vue';
import _IconPearlOfTheOrient from './icon-pearl-of-the-orient.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPearlOfTheOrient.name = getComponentsPrefix() + _IconPearlOfTheOrient.name;

const IconPearlOfTheOrient = Object.assign(_IconPearlOfTheOrient, {
  install: (app: App) => {
    app.component(_IconPearlOfTheOrient.name, _IconPearlOfTheOrient);
  }
});

export default IconPearlOfTheOrient;