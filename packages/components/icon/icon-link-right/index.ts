import type { App } from 'vue';
import _IconLinkRight from './icon-link-right.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkRight.name = getComponentsPrefix() + _IconLinkRight.name;

const IconLinkRight = Object.assign(_IconLinkRight, {
  install: (app: App) => {
    app.component(_IconLinkRight.name, _IconLinkRight);
  }
});

export default IconLinkRight;