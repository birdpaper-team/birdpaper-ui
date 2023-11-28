import type { App } from 'vue';
import _IconAddPic from './icon-add-pic.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAddPic.name = getComponentsPrefix() + _IconAddPic.name;

const IconAddPic = Object.assign(_IconAddPic, {
  install: (app: App) => {
    app.component(_IconAddPic.name, _IconAddPic);
  }
});

export default IconAddPic;