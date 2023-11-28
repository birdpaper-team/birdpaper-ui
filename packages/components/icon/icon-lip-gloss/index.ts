import type { App } from 'vue';
import _IconLipGloss from './icon-lip-gloss.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLipGloss.name = getComponentsPrefix() + _IconLipGloss.name;

const IconLipGloss = Object.assign(_IconLipGloss, {
  install: (app: App) => {
    app.component(_IconLipGloss.name, _IconLipGloss);
  }
});

export default IconLipGloss;