import type { App } from 'vue';
import _IconArchersBow from './icon-archers-bow.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconArchersBow.name = getComponentsPrefix() + _IconArchersBow.name;

const IconArchersBow = Object.assign(_IconArchersBow, {
  install: (app: App) => {
    app.component(_IconArchersBow.name, _IconArchersBow);
  }
});

export default IconArchersBow;