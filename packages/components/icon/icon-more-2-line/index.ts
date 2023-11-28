import type { App } from 'vue';
import _IconMore2Line from './icon-more-2-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMore2Line.name = getComponentsPrefix() + _IconMore2Line.name;

const IconMore2Line = Object.assign(_IconMore2Line, {
  install: (app: App) => {
    app.component(_IconMore2Line.name, _IconMore2Line);
  }
});

export default IconMore2Line;