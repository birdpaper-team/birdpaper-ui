import type { App } from 'vue';
import _IconBankCard from './icon-bank-card.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBankCard.name = getComponentsPrefix() + _IconBankCard.name;

const IconBankCard = Object.assign(_IconBankCard, {
  install: (app: App) => {
    app.component(_IconBankCard.name, _IconBankCard);
  }
});

export default IconBankCard;