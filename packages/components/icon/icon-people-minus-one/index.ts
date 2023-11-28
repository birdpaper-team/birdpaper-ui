import type { App } from 'vue';
import _IconPeopleMinusOne from './icon-people-minus-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeopleMinusOne.name = getComponentsPrefix() + _IconPeopleMinusOne.name;

const IconPeopleMinusOne = Object.assign(_IconPeopleMinusOne, {
  install: (app: App) => {
    app.component(_IconPeopleMinusOne.name, _IconPeopleMinusOne);
  }
});

export default IconPeopleMinusOne;