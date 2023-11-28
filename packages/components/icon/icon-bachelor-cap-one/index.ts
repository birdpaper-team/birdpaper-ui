import type { App } from 'vue';
import _IconBachelorCapOne from './icon-bachelor-cap-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBachelorCapOne.name = getComponentsPrefix() + _IconBachelorCapOne.name;

const IconBachelorCapOne = Object.assign(_IconBachelorCapOne, {
  install: (app: App) => {
    app.component(_IconBachelorCapOne.name, _IconBachelorCapOne);
  }
});

export default IconBachelorCapOne;