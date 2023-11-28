import type { App } from 'vue';
import _IconTransport from './icon-transport.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTransport.name = getComponentsPrefix() + _IconTransport.name;

const IconTransport = Object.assign(_IconTransport, {
  install: (app: App) => {
    app.component(_IconTransport.name, _IconTransport);
  }
});

export default IconTransport;