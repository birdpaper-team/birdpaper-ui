import type { App } from 'vue';
import _IconDownPicture from './icon-down-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDownPicture.name = getComponentsPrefix() + _IconDownPicture.name;

const IconDownPicture = Object.assign(_IconDownPicture, {
  install: (app: App) => {
    app.component(_IconDownPicture.name, _IconDownPicture);
  }
});

export default IconDownPicture;