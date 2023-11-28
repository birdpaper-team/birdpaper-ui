import type { App } from 'vue';
import _IconNewPicture from './icon-new-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNewPicture.name = getComponentsPrefix() + _IconNewPicture.name;

const IconNewPicture = Object.assign(_IconNewPicture, {
  install: (app: App) => {
    app.component(_IconNewPicture.name, _IconNewPicture);
  }
});

export default IconNewPicture;