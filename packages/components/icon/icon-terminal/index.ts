import type { App } from 'vue';
import _IconTerminal from './icon-terminal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTerminal.name = getComponentsPrefix() + _IconTerminal.name;

const IconTerminal = Object.assign(_IconTerminal, {
  install: (app: App) => {
    app.component(_IconTerminal.name, _IconTerminal);
  }
});

export default IconTerminal;