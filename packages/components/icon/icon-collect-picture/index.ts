import type { App } from 'vue';
import _IconCollectPicture from './icon-collect-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCollectPicture.name = getComponentsPrefix() + _IconCollectPicture.name;

const IconCollectPicture = Object.assign(_IconCollectPicture, {
  install: (app: App) => {
    app.component(_IconCollectPicture.name, _IconCollectPicture);
  }
});

export default IconCollectPicture;