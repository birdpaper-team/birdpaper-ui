import type { App } from 'vue';
import _IconTicketsTwo from './icon-tickets-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTicketsTwo.name = getComponentsPrefix() + _IconTicketsTwo.name;

const IconTicketsTwo = Object.assign(_IconTicketsTwo, {
  install: (app: App) => {
    app.component(_IconTicketsTwo.name, _IconTicketsTwo);
  }
});

export default IconTicketsTwo;