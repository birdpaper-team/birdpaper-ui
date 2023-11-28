import type { App } from 'vue';
import _IconPicture from './icon-picture.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPicture.name = getComponentsPrefix() + _IconPicture.name;

const IconPicture = Object.assign(_IconPicture, {
  install: (app: App) => {
    app.component(_IconPicture.name, _IconPicture);
  }
});

export default IconPicture;