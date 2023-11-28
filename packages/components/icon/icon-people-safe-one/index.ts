import type { App } from 'vue';
import _IconPeopleSafeOne from './icon-people-safe-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleSafeOne.name = getComponentsPrefix() + _IconPeopleSafeOne.name;

const IconPeopleSafeOne = Object.assign(_IconPeopleSafeOne, {
  install: (app: App) => {
    app.component(_IconPeopleSafeOne.name, _IconPeopleSafeOne);
  }
});

export default IconPeopleSafeOne;