import type { App } from 'vue';
import _IconLinkThree from './icon-link-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkThree.name = getComponentsPrefix() + _IconLinkThree.name;

const IconLinkThree = Object.assign(_IconLinkThree, {
  install: (app: App) => {
    app.component(_IconLinkThree.name, _IconLinkThree);
  }
});

export default IconLinkThree;