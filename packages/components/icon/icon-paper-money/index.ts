import type { App } from 'vue';
import _IconPaperMoney from './icon-paper-money.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPaperMoney.name = getComponentsPrefix() + _IconPaperMoney.name;

const IconPaperMoney = Object.assign(_IconPaperMoney, {
  install: (app: App) => {
    app.component(_IconPaperMoney.name, _IconPaperMoney);
  }
});

export default IconPaperMoney;