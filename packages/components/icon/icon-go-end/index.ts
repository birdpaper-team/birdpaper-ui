import type { App } from 'vue';
import _IconGoEnd from './icon-go-end.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGoEnd.name = getComponentsPrefix() + _IconGoEnd.name;

const IconGoEnd = Object.assign(_IconGoEnd, {
  install: (app: App) => {
    app.component(_IconGoEnd.name, _IconGoEnd);
  }
});

export default IconGoEnd;