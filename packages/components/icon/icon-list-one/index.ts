import type { App } from 'vue';
import _IconListOne from './icon-list-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconListOne.name = getComponentsPrefix() + _IconListOne.name;

const IconListOne = Object.assign(_IconListOne, {
  install: (app: App) => {
    app.component(_IconListOne.name, _IconListOne);
  }
});

export default IconListOne;