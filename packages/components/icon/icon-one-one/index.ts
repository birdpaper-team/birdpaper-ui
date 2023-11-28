import type { App } from 'vue';
import _IconOneOne from './icon-one-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOneOne.name = getComponentsPrefix() + _IconOneOne.name;

const IconOneOne = Object.assign(_IconOneOne, {
  install: (app: App) => {
    app.component(_IconOneOne.name, _IconOneOne);
  }
});

export default IconOneOne;