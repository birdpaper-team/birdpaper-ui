import type { App } from 'vue';
import _IconLinkFour from './icon-link-four.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkFour.name = getComponentsPrefix() + _IconLinkFour.name;

const IconLinkFour = Object.assign(_IconLinkFour, {
  install: (app: App) => {
    app.component(_IconLinkFour.name, _IconLinkFour);
  }
});

export default IconLinkFour;