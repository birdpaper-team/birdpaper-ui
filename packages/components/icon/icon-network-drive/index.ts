import type { App } from 'vue';
import _IconNetworkDrive from './icon-network-drive.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNetworkDrive.name = getComponentsPrefix() + _IconNetworkDrive.name;

const IconNetworkDrive = Object.assign(_IconNetworkDrive, {
  install: (app: App) => {
    app.component(_IconNetworkDrive.name, _IconNetworkDrive);
  }
});

export default IconNetworkDrive;