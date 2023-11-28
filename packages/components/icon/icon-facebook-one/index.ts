import type { App } from 'vue';
import _IconFacebookOne from './icon-facebook-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFacebookOne.name = getComponentsPrefix() + _IconFacebookOne.name;

const IconFacebookOne = Object.assign(_IconFacebookOne, {
  install: (app: App) => {
    app.component(_IconFacebookOne.name, _IconFacebookOne);
  }
});

export default IconFacebookOne;