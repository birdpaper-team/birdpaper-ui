import type { App } from 'vue';
import _IconBankCardOne from './icon-bank-card-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBankCardOne.name = getComponentsPrefix() + _IconBankCardOne.name;

const IconBankCardOne = Object.assign(_IconBankCardOne, {
  install: (app: App) => {
    app.component(_IconBankCardOne.name, _IconBankCardOne);
  }
});

export default IconBankCardOne;