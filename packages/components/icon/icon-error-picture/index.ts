import type { App } from 'vue';
import _IconErrorPicture from './icon-error-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconErrorPicture.name = getComponentsPrefix() + _IconErrorPicture.name;

const IconErrorPicture = Object.assign(_IconErrorPicture, {
  install: (app: App) => {
    app.component(_IconErrorPicture.name, _IconErrorPicture);
  }
});

export default IconErrorPicture;