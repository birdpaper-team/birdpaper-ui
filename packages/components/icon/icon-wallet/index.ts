import type { App } from 'vue';
import _IconWallet from './icon-wallet.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWallet.name = getComponentsPrefix() + _IconWallet.name;

const IconWallet = Object.assign(_IconWallet, {
  install: (app: App) => {
    app.component(_IconWallet.name, _IconWallet);
  }
});

export default IconWallet;