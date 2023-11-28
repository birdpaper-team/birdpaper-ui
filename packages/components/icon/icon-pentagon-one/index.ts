import type { App } from 'vue';
import _IconPentagonOne from './icon-pentagon-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPentagonOne.name = getComponentsPrefix() + _IconPentagonOne.name;

const IconPentagonOne = Object.assign(_IconPentagonOne, {
  install: (app: App) => {
    app.component(_IconPentagonOne.name, _IconPentagonOne);
  }
});

export default IconPentagonOne;