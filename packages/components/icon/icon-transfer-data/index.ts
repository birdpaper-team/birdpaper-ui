import type { App } from 'vue';
import _IconTransferData from './icon-transfer-data.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTransferData.name = getComponentsPrefix() + _IconTransferData.name;

const IconTransferData = Object.assign(_IconTransferData, {
  install: (app: App) => {
    app.component(_IconTransferData.name, _IconTransferData);
  }
});

export default IconTransferData;