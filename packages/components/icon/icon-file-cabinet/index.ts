import type { App } from 'vue';
import _IconFileCabinet from './icon-file-cabinet.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileCabinet.name = getComponentsPrefix() + _IconFileCabinet.name;

const IconFileCabinet = Object.assign(_IconFileCabinet, {
  install: (app: App) => {
    app.component(_IconFileCabinet.name, _IconFileCabinet);
  }
});

export default IconFileCabinet;