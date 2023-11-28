import type { App } from 'vue';
import _IconBrush2Line from './icon-brush-2-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBrush2Line.name = getComponentsPrefix() + _IconBrush2Line.name;

const IconBrush2Line = Object.assign(_IconBrush2Line, {
  install: (app: App) => {
    app.component(_IconBrush2Line.name, _IconBrush2Line);
  }
});

export default IconBrush2Line;