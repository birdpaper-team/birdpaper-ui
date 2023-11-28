import type { App } from 'vue';
import _IconHeavyMetal from './icon-heavy-metal.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHeavyMetal.name = getComponentsPrefix() + _IconHeavyMetal.name;

const IconHeavyMetal = Object.assign(_IconHeavyMetal, {
  install: (app: App) => {
    app.component(_IconHeavyMetal.name, _IconHeavyMetal);
  }
});

export default IconHeavyMetal;