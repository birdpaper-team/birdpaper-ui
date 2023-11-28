import type { App } from 'vue';
import _IconBitcoin from './icon-bitcoin.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBitcoin.name = getComponentsPrefix() + _IconBitcoin.name;

const IconBitcoin = Object.assign(_IconBitcoin, {
  install: (app: App) => {
    app.component(_IconBitcoin.name, _IconBitcoin);
  }
});

export default IconBitcoin;