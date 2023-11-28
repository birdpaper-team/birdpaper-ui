import type { App } from 'vue';
import _IconMonumentTwo from './icon-monument-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMonumentTwo.name = getComponentsPrefix() + _IconMonumentTwo.name;

const IconMonumentTwo = Object.assign(_IconMonumentTwo, {
  install: (app: App) => {
    app.component(_IconMonumentTwo.name, _IconMonumentTwo);
  }
});

export default IconMonumentTwo;