import type { App } from 'vue';
import _IconRocketOne from './icon-rocket-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRocketOne.name = getComponentsPrefix() + _IconRocketOne.name;

const IconRocketOne = Object.assign(_IconRocketOne, {
  install: (app: App) => {
    app.component(_IconRocketOne.name, _IconRocketOne);
  }
});

export default IconRocketOne;