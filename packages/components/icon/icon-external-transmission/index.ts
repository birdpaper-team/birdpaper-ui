import type { App } from 'vue';
import _IconExternalTransmission from './icon-external-transmission.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconExternalTransmission.name = getComponentsPrefix() + _IconExternalTransmission.name;

const IconExternalTransmission = Object.assign(_IconExternalTransmission, {
  install: (app: App) => {
    app.component(_IconExternalTransmission.name, _IconExternalTransmission);
  }
});

export default IconExternalTransmission;