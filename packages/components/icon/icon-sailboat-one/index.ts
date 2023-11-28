import type { App } from 'vue';
import _IconSailboatOne from './icon-sailboat-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSailboatOne.name = getComponentsPrefix() + _IconSailboatOne.name;

const IconSailboatOne = Object.assign(_IconSailboatOne, {
  install: (app: App) => {
    app.component(_IconSailboatOne.name, _IconSailboatOne);
  }
});

export default IconSailboatOne;