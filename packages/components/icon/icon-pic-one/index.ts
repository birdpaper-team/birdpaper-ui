import type { App } from 'vue';
import _IconPicOne from './icon-pic-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPicOne.name = getComponentsPrefix() + _IconPicOne.name;

const IconPicOne = Object.assign(_IconPicOne, {
  install: (app: App) => {
    app.component(_IconPicOne.name, _IconPicOne);
  }
});

export default IconPicOne;