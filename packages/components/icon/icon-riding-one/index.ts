import type { App } from 'vue';
import _IconRidingOne from './icon-riding-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRidingOne.name = getComponentsPrefix() + _IconRidingOne.name;

const IconRidingOne = Object.assign(_IconRidingOne, {
  install: (app: App) => {
    app.component(_IconRidingOne.name, _IconRidingOne);
  }
});

export default IconRidingOne;