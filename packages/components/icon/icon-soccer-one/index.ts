import type { App } from 'vue';
import _IconSoccerOne from './icon-soccer-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSoccerOne.name = getComponentsPrefix() + _IconSoccerOne.name;

const IconSoccerOne = Object.assign(_IconSoccerOne, {
  install: (app: App) => {
    app.component(_IconSoccerOne.name, _IconSoccerOne);
  }
});

export default IconSoccerOne;