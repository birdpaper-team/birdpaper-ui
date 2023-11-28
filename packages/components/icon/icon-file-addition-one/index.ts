import type { App } from 'vue';
import _IconFileAdditionOne from './icon-file-addition-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileAdditionOne.name = getComponentsPrefix() + _IconFileAdditionOne.name;

const IconFileAdditionOne = Object.assign(_IconFileAdditionOne, {
  install: (app: App) => {
    app.component(_IconFileAdditionOne.name, _IconFileAdditionOne);
  }
});

export default IconFileAdditionOne;