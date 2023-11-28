import type { App } from 'vue';
import _IconBowling from './icon-bowling.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconBowling.name = getComponentsPrefix() + _IconBowling.name;

const IconBowling = Object.assign(_IconBowling, {
  install: (app: App) => {
    app.component(_IconBowling.name, _IconBowling);
  }
});

export default IconBowling;