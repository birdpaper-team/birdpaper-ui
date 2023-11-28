import type { App } from 'vue';
import _IconWalletThree from './icon-wallet-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWalletThree.name = getComponentsPrefix() + _IconWalletThree.name;

const IconWalletThree = Object.assign(_IconWalletThree, {
  install: (app: App) => {
    app.component(_IconWalletThree.name, _IconWalletThree);
  }
});

export default IconWalletThree;