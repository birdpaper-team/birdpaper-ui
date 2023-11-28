import type { App } from 'vue';
import _IconAssemblyLine from './icon-assembly-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAssemblyLine.name = getComponentsPrefix() + _IconAssemblyLine.name;

const IconAssemblyLine = Object.assign(_IconAssemblyLine, {
  install: (app: App) => {
    app.component(_IconAssemblyLine.name, _IconAssemblyLine);
  }
});

export default IconAssemblyLine;