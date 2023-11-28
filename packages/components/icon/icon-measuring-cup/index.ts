import type { App } from 'vue';
import _IconMeasuringCup from './icon-measuring-cup.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMeasuringCup.name = getComponentsPrefix() + _IconMeasuringCup.name;

const IconMeasuringCup = Object.assign(_IconMeasuringCup, {
  install: (app: App) => {
    app.component(_IconMeasuringCup.name, _IconMeasuringCup);
  }
});

export default IconMeasuringCup;