import type { App } from 'vue';
import _IconCoatHanger from './icon-coat-hanger.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCoatHanger.name = getComponentsPrefix() + _IconCoatHanger.name;

const IconCoatHanger = Object.assign(_IconCoatHanger, {
  install: (app: App) => {
    app.component(_IconCoatHanger.name, _IconCoatHanger);
  }
});

export default IconCoatHanger;