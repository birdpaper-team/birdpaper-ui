import type { App } from 'vue';
import _IconFileHashOne from './icon-file-hash-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileHashOne.name = getComponentsPrefix() + _IconFileHashOne.name;

const IconFileHashOne = Object.assign(_IconFileHashOne, {
  install: (app: App) => {
    app.component(_IconFileHashOne.name, _IconFileHashOne);
  }
});

export default IconFileHashOne;