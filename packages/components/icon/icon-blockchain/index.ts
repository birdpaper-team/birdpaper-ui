import type { App } from 'vue';
import _IconBlockchain from './icon-blockchain.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBlockchain.name = getComponentsPrefix() + _IconBlockchain.name;

const IconBlockchain = Object.assign(_IconBlockchain, {
  install: (app: App) => {
    app.component(_IconBlockchain.name, _IconBlockchain);
  }
});

export default IconBlockchain;