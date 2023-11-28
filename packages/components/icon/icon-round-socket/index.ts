import type { App } from 'vue';
import _IconRoundSocket from './icon-round-socket.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRoundSocket.name = getComponentsPrefix() + _IconRoundSocket.name;

const IconRoundSocket = Object.assign(_IconRoundSocket, {
  install: (app: App) => {
    app.component(_IconRoundSocket.name, _IconRoundSocket);
  }
});

export default IconRoundSocket;