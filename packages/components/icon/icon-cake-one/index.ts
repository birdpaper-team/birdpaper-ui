import type { App } from 'vue';
import _IconCakeOne from './icon-cake-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCakeOne.name = getComponentsPrefix() + _IconCakeOne.name;

const IconCakeOne = Object.assign(_IconCakeOne, {
  install: (app: App) => {
    app.component(_IconCakeOne.name, _IconCakeOne);
  }
});

export default IconCakeOne;