import type { App } from 'vue';
import _IconPieOne from './icon-pie-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPieOne.name = getComponentsPrefix() + _IconPieOne.name;

const IconPieOne = Object.assign(_IconPieOne, {
  install: (app: App) => {
    app.component(_IconPieOne.name, _IconPieOne);
  }
});

export default IconPieOne;