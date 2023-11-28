import type { App } from 'vue';
import _IconWalletOne from './icon-wallet-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWalletOne.name = getComponentsPrefix() + _IconWalletOne.name;

const IconWalletOne = Object.assign(_IconWalletOne, {
  install: (app: App) => {
    app.component(_IconWalletOne.name, _IconWalletOne);
  }
});

export default IconWalletOne;