import type { App } from 'vue';
import _IconLinkTwo from './icon-link-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkTwo.name = getComponentsPrefix() + _IconLinkTwo.name;

const IconLinkTwo = Object.assign(_IconLinkTwo, {
  install: (app: App) => {
    app.component(_IconLinkTwo.name, _IconLinkTwo);
  }
});

export default IconLinkTwo;