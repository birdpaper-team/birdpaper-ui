import type { App } from 'vue';
import _IconAddPicture from './icon-add-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddPicture.name = getComponentsPrefix() + _IconAddPicture.name;

const IconAddPicture = Object.assign(_IconAddPicture, {
  install: (app: App) => {
    app.component(_IconAddPicture.name, _IconAddPicture);
  }
});

export default IconAddPicture;