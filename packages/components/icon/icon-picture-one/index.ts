import type { App } from 'vue';
import _IconPictureOne from './icon-picture-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPictureOne.name = getComponentsPrefix() + _IconPictureOne.name;

const IconPictureOne = Object.assign(_IconPictureOne, {
  install: (app: App) => {
    app.component(_IconPictureOne.name, _IconPictureOne);
  }
});

export default IconPictureOne;