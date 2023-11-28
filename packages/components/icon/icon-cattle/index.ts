import type { App } from 'vue';
import _IconCattle from './icon-cattle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCattle.name = getComponentsPrefix() + _IconCattle.name;

const IconCattle = Object.assign(_IconCattle, {
  install: (app: App) => {
    app.component(_IconCattle.name, _IconCattle);
  }
});

export default IconCattle;