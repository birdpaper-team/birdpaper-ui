import type { App } from 'vue';
import _IconSlippers from './icon-slippers.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSlippers.name = getComponentsPrefix() + _IconSlippers.name;

const IconSlippers = Object.assign(_IconSlippers, {
  install: (app: App) => {
    app.component(_IconSlippers.name, _IconSlippers);
  }
});

export default IconSlippers;