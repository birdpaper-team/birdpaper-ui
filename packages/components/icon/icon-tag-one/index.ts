import type { App } from 'vue';
import _IconTagOne from './icon-tag-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTagOne.name = getComponentsPrefix() + _IconTagOne.name;

const IconTagOne = Object.assign(_IconTagOne, {
  install: (app: App) => {
    app.component(_IconTagOne.name, _IconTagOne);
  }
});

export default IconTagOne;