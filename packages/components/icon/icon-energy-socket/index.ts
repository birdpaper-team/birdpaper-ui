import type { App } from 'vue';
import _IconEnergySocket from './icon-energy-socket.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconEnergySocket.name = getComponentsPrefix() + _IconEnergySocket.name;

const IconEnergySocket = Object.assign(_IconEnergySocket, {
  install: (app: App) => {
    app.component(_IconEnergySocket.name, _IconEnergySocket);
  }
});

export default IconEnergySocket;