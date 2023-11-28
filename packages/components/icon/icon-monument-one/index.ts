import type { App } from 'vue';
import _IconMonumentOne from './icon-monument-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMonumentOne.name = getComponentsPrefix() + _IconMonumentOne.name;

const IconMonumentOne = Object.assign(_IconMonumentOne, {
  install: (app: App) => {
    app.component(_IconMonumentOne.name, _IconMonumentOne);
  }
});

export default IconMonumentOne;