import type { App } from 'vue';
import _IconFileAddition from './icon-file-addition.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileAddition.name = getComponentsPrefix() + _IconFileAddition.name;

const IconFileAddition = Object.assign(_IconFileAddition, {
  install: (app: App) => {
    app.component(_IconFileAddition.name, _IconFileAddition);
  }
});

export default IconFileAddition;