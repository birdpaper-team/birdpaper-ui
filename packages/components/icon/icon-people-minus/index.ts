import type { App } from 'vue';
import _IconPeopleMinus from './icon-people-minus.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleMinus.name = getComponentsPrefix() + _IconPeopleMinus.name;

const IconPeopleMinus = Object.assign(_IconPeopleMinus, {
  install: (app: App) => {
    app.component(_IconPeopleMinus.name, _IconPeopleMinus);
  }
});

export default IconPeopleMinus;