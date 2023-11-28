import type { App } from 'vue';
import _IconBank from './icon-bank.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBank.name = getComponentsPrefix() + _IconBank.name;

const IconBank = Object.assign(_IconBank, {
  install: (app: App) => {
    app.component(_IconBank.name, _IconBank);
  }
});

export default IconBank;