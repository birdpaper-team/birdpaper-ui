import type { App } from 'vue';
import _IconTerminalBoxLine from './icon-terminal-box-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTerminalBoxLine.name = getComponentsPrefix() + _IconTerminalBoxLine.name;

const IconTerminalBoxLine = Object.assign(_IconTerminalBoxLine, {
  install: (app: App) => {
    app.component(_IconTerminalBoxLine.name, _IconTerminalBoxLine);
  }
});

export default IconTerminalBoxLine;