import type { App } from 'vue';
import _IconPeoplePlusOne from './icon-people-plus-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeoplePlusOne.name = getComponentsPrefix() + _IconPeoplePlusOne.name;

const IconPeoplePlusOne = Object.assign(_IconPeoplePlusOne, {
  install: (app: App) => {
    app.component(_IconPeoplePlusOne.name, _IconPeoplePlusOne);
  }
});

export default IconPeoplePlusOne;