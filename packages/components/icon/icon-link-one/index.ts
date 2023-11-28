import type { App } from 'vue';
import _IconLinkOne from './icon-link-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLinkOne.name = getComponentsPrefix() + _IconLinkOne.name;

const IconLinkOne = Object.assign(_IconLinkOne, {
  install: (app: App) => {
    app.component(_IconLinkOne.name, _IconLinkOne);
  }
});

export default IconLinkOne;