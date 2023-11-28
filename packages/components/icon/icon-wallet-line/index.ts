import type { App } from 'vue';
import _IconWalletLine from './icon-wallet-line.vue';

const IconWalletLine = Object.assign(_IconWalletLine, {
  install: (app: App) => {
    app.component(_IconWalletLine.name, _IconWalletLine);
  }
});

export default IconWalletLine;