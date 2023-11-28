import type { App } from 'vue';
import _IconCourt from './icon-court.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCourt.name = getComponentsPrefix() + _IconCourt.name;

const IconCourt = Object.assign(_IconCourt, {
  install: (app: App) => {
    app.component(_IconCourt.name, _IconCourt);
  }
});

export default IconCourt;