import type { App } from 'vue';
import _IconPagoda from './icon-pagoda.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPagoda.name = getComponentsPrefix() + _IconPagoda.name;

const IconPagoda = Object.assign(_IconPagoda, {
  install: (app: App) => {
    app.component(_IconPagoda.name, _IconPagoda);
  }
});

export default IconPagoda;