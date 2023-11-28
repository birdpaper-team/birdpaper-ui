import type { App } from 'vue';
import _IconFileFailedOne from './icon-file-failed-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileFailedOne.name = getComponentsPrefix() + _IconFileFailedOne.name;

const IconFileFailedOne = Object.assign(_IconFileFailedOne, {
  install: (app: App) => {
    app.component(_IconFileFailedOne.name, _IconFileFailedOne);
  }
});

export default IconFileFailedOne;