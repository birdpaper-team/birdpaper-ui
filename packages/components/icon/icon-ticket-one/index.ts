import type { App } from 'vue';
import _IconTicketOne from './icon-ticket-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTicketOne.name = getComponentsPrefix() + _IconTicketOne.name;

const IconTicketOne = Object.assign(_IconTicketOne, {
  install: (app: App) => {
    app.component(_IconTicketOne.name, _IconTicketOne);
  }
});

export default IconTicketOne;