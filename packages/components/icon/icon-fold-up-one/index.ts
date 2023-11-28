import type { App } from 'vue';
import _IconFoldUpOne from './icon-fold-up-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFoldUpOne.name = getComponentsPrefix() + _IconFoldUpOne.name;

const IconFoldUpOne = Object.assign(_IconFoldUpOne, {
  install: (app: App) => {
    app.component(_IconFoldUpOne.name, _IconFoldUpOne);
  }
});

export default IconFoldUpOne;