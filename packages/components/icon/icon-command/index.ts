import type { App } from 'vue';
import _IconCommand from './icon-command.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCommand.name = getComponentsPrefix() + _IconCommand.name;

const IconCommand = Object.assign(_IconCommand, {
  install: (app: App) => {
    app.component(_IconCommand.name, _IconCommand);
  }
});

export default IconCommand;