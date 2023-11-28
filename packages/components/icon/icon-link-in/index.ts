import type { App } from 'vue';
import _IconLinkIn from './icon-link-in.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkIn.name = getComponentsPrefix() + _IconLinkIn.name;

const IconLinkIn = Object.assign(_IconLinkIn, {
  install: (app: App) => {
    app.component(_IconLinkIn.name, _IconLinkIn);
  }
});

export default IconLinkIn;