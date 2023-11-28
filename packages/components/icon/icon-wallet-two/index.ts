import type { App } from 'vue';
import _IconWalletTwo from './icon-wallet-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWalletTwo.name = getComponentsPrefix() + _IconWalletTwo.name;

const IconWalletTwo = Object.assign(_IconWalletTwo, {
  install: (app: App) => {
    app.component(_IconWalletTwo.name, _IconWalletTwo);
  }
});

export default IconWalletTwo;