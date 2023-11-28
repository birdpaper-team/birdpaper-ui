import type { App } from 'vue';
import _IconDataNull from './icon-data-null.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDataNull.name = getComponentsPrefix() + _IconDataNull.name;

const IconDataNull = Object.assign(_IconDataNull, {
  install: (app: App) => {
    app.component(_IconDataNull.name, _IconDataNull);
  }
});

export default IconDataNull;