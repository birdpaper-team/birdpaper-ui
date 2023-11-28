import type { App } from 'vue';
import _IconFacebook from './icon-facebook.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFacebook.name = getComponentsPrefix() + _IconFacebook.name;

const IconFacebook = Object.assign(_IconFacebook, {
  install: (app: App) => {
    app.component(_IconFacebook.name, _IconFacebook);
  }
});

export default IconFacebook;