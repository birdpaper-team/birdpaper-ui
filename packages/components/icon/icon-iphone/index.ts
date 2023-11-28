import type { App } from 'vue';
import _IconIphone from './icon-iphone.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconIphone.name = getComponentsPrefix() + _IconIphone.name;

const IconIphone = Object.assign(_IconIphone, {
  install: (app: App) => {
    app.component(_IconIphone.name, _IconIphone);
  }
});

export default IconIphone;