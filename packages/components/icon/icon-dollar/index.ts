import type { App } from 'vue';
import _IconDollar from './icon-dollar.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDollar.name = getComponentsPrefix() + _IconDollar.name;

const IconDollar = Object.assign(_IconDollar, {
  install: (app: App) => {
    app.component(_IconDollar.name, _IconDollar);
  }
});

export default IconDollar;