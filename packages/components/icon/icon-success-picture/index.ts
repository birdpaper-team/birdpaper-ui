import type { App } from 'vue';
import _IconSuccessPicture from './icon-success-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSuccessPicture.name = getComponentsPrefix() + _IconSuccessPicture.name;

const IconSuccessPicture = Object.assign(_IconSuccessPicture, {
  install: (app: App) => {
    app.component(_IconSuccessPicture.name, _IconSuccessPicture);
  }
});

export default IconSuccessPicture;