import type { App } from 'vue';
import _IconTomato from './icon-tomato.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTomato.name = getComponentsPrefix() + _IconTomato.name;

const IconTomato = Object.assign(_IconTomato, {
  install: (app: App) => {
    app.component(_IconTomato.name, _IconTomato);
  }
});

export default IconTomato;