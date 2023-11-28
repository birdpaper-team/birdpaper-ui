import type { App } from 'vue';
import _IconMegaphoneLine from './icon-megaphone-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMegaphoneLine.name = getComponentsPrefix() + _IconMegaphoneLine.name;

const IconMegaphoneLine = Object.assign(_IconMegaphoneLine, {
  install: (app: App) => {
    app.component(_IconMegaphoneLine.name, _IconMegaphoneLine);
  }
});

export default IconMegaphoneLine;