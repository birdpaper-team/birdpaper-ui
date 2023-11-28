import type { App } from 'vue';
import _IconFileSuccessOne from './icon-file-success-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileSuccessOne.name = getComponentsPrefix() + _IconFileSuccessOne.name;

const IconFileSuccessOne = Object.assign(_IconFileSuccessOne, {
  install: (app: App) => {
    app.component(_IconFileSuccessOne.name, _IconFileSuccessOne);
  }
});

export default IconFileSuccessOne;