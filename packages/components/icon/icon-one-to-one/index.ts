import type { App } from 'vue';
import _IconOneToOne from './icon-one-to-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOneToOne.name = getComponentsPrefix() + _IconOneToOne.name;

const IconOneToOne = Object.assign(_IconOneToOne, {
  install: (app: App) => {
    app.component(_IconOneToOne.name, _IconOneToOne);
  }
});

export default IconOneToOne;