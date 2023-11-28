import type { App } from 'vue';
import _IconPeople from './icon-people.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPeople.name = getComponentsPrefix() + _IconPeople.name;

const IconPeople = Object.assign(_IconPeople, {
  install: (app: App) => {
    app.component(_IconPeople.name, _IconPeople);
  }
});

export default IconPeople;