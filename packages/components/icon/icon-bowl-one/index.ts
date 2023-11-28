import type { App } from 'vue';
import _IconBowlOne from './icon-bowl-one.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBowlOne.name = getComponentsPrefix() + _IconBowlOne.name;

const IconBowlOne = Object.assign(_IconBowlOne, {
  install: (app: App) => {
    app.component(_IconBowlOne.name, _IconBowlOne);
  }
});

export default IconBowlOne;