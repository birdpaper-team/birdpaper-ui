import type { App } from 'vue';
import _IconDumbbell from './icon-dumbbell.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDumbbell.name = getComponentsPrefix() + _IconDumbbell.name;

const IconDumbbell = Object.assign(_IconDumbbell, {
  install: (app: App) => {
    app.component(_IconDumbbell.name, _IconDumbbell);
  }
});

export default IconDumbbell;