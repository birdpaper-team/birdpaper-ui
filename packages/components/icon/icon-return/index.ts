import type { App } from 'vue';
import _IconReturn from './icon-return.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReturn.name = getComponentsPrefix() + _IconReturn.name;

const IconReturn = Object.assign(_IconReturn, {
  install: (app: App) => {
    app.component(_IconReturn.name, _IconReturn);
  }
});

export default IconReturn;