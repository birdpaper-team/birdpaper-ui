import type { App } from 'vue';
import _IconBreadOne from './icon-bread-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBreadOne.name = getComponentsPrefix() + _IconBreadOne.name;

const IconBreadOne = Object.assign(_IconBreadOne, {
  install: (app: App) => {
    app.component(_IconBreadOne.name, _IconBreadOne);
  }
});

export default IconBreadOne;