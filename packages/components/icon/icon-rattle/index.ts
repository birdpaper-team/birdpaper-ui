import type { App } from 'vue';
import _IconRattle from './icon-rattle.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRattle.name = getComponentsPrefix() + _IconRattle.name;

const IconRattle = Object.assign(_IconRattle, {
  install: (app: App) => {
    app.component(_IconRattle.name, _IconRattle);
  }
});

export default IconRattle;