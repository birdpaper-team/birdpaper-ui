import type { App } from 'vue';
import _IconMovingPicture from './icon-moving-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMovingPicture.name = getComponentsPrefix() + _IconMovingPicture.name;

const IconMovingPicture = Object.assign(_IconMovingPicture, {
  install: (app: App) => {
    app.component(_IconMovingPicture.name, _IconMovingPicture);
  }
});

export default IconMovingPicture;