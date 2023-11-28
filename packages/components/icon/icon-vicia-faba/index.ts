import type { App } from 'vue';
import _IconViciaFaba from './icon-vicia-faba.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconViciaFaba.name = getComponentsPrefix() + _IconViciaFaba.name;

const IconViciaFaba = Object.assign(_IconViciaFaba, {
  install: (app: App) => {
    app.component(_IconViciaFaba.name, _IconViciaFaba);
  }
});

export default IconViciaFaba;