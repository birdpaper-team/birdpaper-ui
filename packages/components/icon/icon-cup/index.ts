import type { App } from 'vue';
import _IconCup from './icon-cup.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCup.name = getComponentsPrefix() + _IconCup.name;

const IconCup = Object.assign(_IconCup, {
  install: (app: App) => {
    app.component(_IconCup.name, _IconCup);
  }
});

export default IconCup;