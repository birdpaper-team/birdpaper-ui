import type { App } from 'vue';
import _IconBankCardTwo from './icon-bank-card-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBankCardTwo.name = getComponentsPrefix() + _IconBankCardTwo.name;

const IconBankCardTwo = Object.assign(_IconBankCardTwo, {
  install: (app: App) => {
    app.component(_IconBankCardTwo.name, _IconBankCardTwo);
  }
});

export default IconBankCardTwo;