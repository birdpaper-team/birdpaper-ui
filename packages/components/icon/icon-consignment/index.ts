import type { App } from 'vue';
import _IconConsignment from './icon-consignment.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconConsignment.name = getComponentsPrefix() + _IconConsignment.name;

const IconConsignment = Object.assign(_IconConsignment, {
  install: (app: App) => {
    app.component(_IconConsignment.name, _IconConsignment);
  }
});

export default IconConsignment;