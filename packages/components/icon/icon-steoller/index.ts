import type { App } from 'vue';
import _IconSteoller from './icon-steoller.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSteoller.name = getComponentsPrefix() + _IconSteoller.name;

const IconSteoller = Object.assign(_IconSteoller, {
  install: (app: App) => {
    app.component(_IconSteoller.name, _IconSteoller);
  }
});

export default IconSteoller;