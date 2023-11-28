import type { App } from 'vue';
import _IconGymnastics from './icon-gymnastics.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGymnastics.name = getComponentsPrefix() + _IconGymnastics.name;

const IconGymnastics = Object.assign(_IconGymnastics, {
  install: (app: App) => {
    app.component(_IconGymnastics.name, _IconGymnastics);
  }
});

export default IconGymnastics;