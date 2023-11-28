import type { App } from 'vue';
import _IconCakeThree from './icon-cake-three.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCakeThree.name = getComponentsPrefix() + _IconCakeThree.name;

const IconCakeThree = Object.assign(_IconCakeThree, {
  install: (app: App) => {
    app.component(_IconCakeThree.name, _IconCakeThree);
  }
});

export default IconCakeThree;