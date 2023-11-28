import type { App } from 'vue';
import _IconWalletLine from './icon-wallet-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWalletLine.name = getComponentsPrefix() + _IconWalletLine.name;

const IconWalletLine = Object.assign(_IconWalletLine, {
  install: (app: App) => {
    app.component(_IconWalletLine.name, _IconWalletLine);
  }
});

export default IconWalletLine;