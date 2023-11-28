import type { App } from 'vue';
import _IconDisabledPicture from './icon-disabled-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDisabledPicture.name = getComponentsPrefix() + _IconDisabledPicture.name;

const IconDisabledPicture = Object.assign(_IconDisabledPicture, {
  install: (app: App) => {
    app.component(_IconDisabledPicture.name, _IconDisabledPicture);
  }
});

export default IconDisabledPicture;