import type { App } from 'vue';
import _IconModify from './icon-modify.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconModify.name = getComponentsPrefix() + _IconModify.name;

const IconModify = Object.assign(_IconModify, {
  install: (app: App) => {
    app.component(_IconModify.name, _IconModify);
  }
});

export default IconModify;