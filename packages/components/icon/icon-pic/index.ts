import type { App } from 'vue';
import _IconPic from './icon-pic.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPic.name = getComponentsPrefix() + _IconPic.name;

const IconPic = Object.assign(_IconPic, {
  install: (app: App) => {
    app.component(_IconPic.name, _IconPic);
  }
});

export default IconPic;