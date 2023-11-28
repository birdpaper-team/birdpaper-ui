import type { App } from 'vue';
import _IconPaperMoneyTwo from './icon-paper-money-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPaperMoneyTwo.name = getComponentsPrefix() + _IconPaperMoneyTwo.name;

const IconPaperMoneyTwo = Object.assign(_IconPaperMoneyTwo, {
  install: (app: App) => {
    app.component(_IconPaperMoneyTwo.name, _IconPaperMoneyTwo);
  }
});

export default IconPaperMoneyTwo;