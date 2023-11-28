import type { App } from 'vue';
import _IconFileDisplayOne from './icon-file-display-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileDisplayOne.name = getComponentsPrefix() + _IconFileDisplayOne.name;

const IconFileDisplayOne = Object.assign(_IconFileDisplayOne, {
  install: (app: App) => {
    app.component(_IconFileDisplayOne.name, _IconFileDisplayOne);
  }
});

export default IconFileDisplayOne;