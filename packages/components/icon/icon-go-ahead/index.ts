import type { App } from 'vue';
import _IconGoAhead from './icon-go-ahead.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconGoAhead.name = getComponentsPrefix() + _IconGoAhead.name;

const IconGoAhead = Object.assign(_IconGoAhead, {
  install: (app: App) => {
    app.component(_IconGoAhead.name, _IconGoAhead);
  }
});

export default IconGoAhead;