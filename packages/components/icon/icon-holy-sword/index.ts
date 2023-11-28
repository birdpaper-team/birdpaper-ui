import type { App } from 'vue';
import _IconHolySword from './icon-holy-sword.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHolySword.name = getComponentsPrefix() + _IconHolySword.name;

const IconHolySword = Object.assign(_IconHolySword, {
  install: (app: App) => {
    app.component(_IconHolySword.name, _IconHolySword);
  }
});

export default IconHolySword;