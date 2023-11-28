import type { App } from 'vue';
import _IconTransfer from './icon-transfer.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTransfer.name = getComponentsPrefix() + _IconTransfer.name;

const IconTransfer = Object.assign(_IconTransfer, {
  install: (app: App) => {
    app.component(_IconTransfer.name, _IconTransfer);
  }
});

export default IconTransfer;