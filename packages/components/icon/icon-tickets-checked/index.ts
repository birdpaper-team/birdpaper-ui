import type { App } from 'vue';
import _IconTicketsChecked from './icon-tickets-checked.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTicketsChecked.name = getComponentsPrefix() + _IconTicketsChecked.name;

const IconTicketsChecked = Object.assign(_IconTicketsChecked, {
  install: (app: App) => {
    app.component(_IconTicketsChecked.name, _IconTicketsChecked);
  }
});

export default IconTicketsChecked;