import type { App } from 'vue';
import _IconFileHidingOne from './icon-file-hiding-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileHidingOne.name = getComponentsPrefix() + _IconFileHidingOne.name;

const IconFileHidingOne = Object.assign(_IconFileHidingOne, {
  install: (app: App) => {
    app.component(_IconFileHidingOne.name, _IconFileHidingOne);
  }
});

export default IconFileHidingOne;