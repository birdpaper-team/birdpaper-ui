import type { App } from 'vue';
import _IconBoxingOne from './icon-boxing-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBoxingOne.name = getComponentsPrefix() + _IconBoxingOne.name;

const IconBoxingOne = Object.assign(_IconBoxingOne, {
  install: (app: App) => {
    app.component(_IconBoxingOne.name, _IconBoxingOne);
  }
});

export default IconBoxingOne;