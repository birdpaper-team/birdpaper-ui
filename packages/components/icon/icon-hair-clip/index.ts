import type { App } from 'vue';
import _IconHairClip from './icon-hair-clip.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconHairClip.name = getComponentsPrefix() + _IconHairClip.name;

const IconHairClip = Object.assign(_IconHairClip, {
  install: (app: App) => {
    app.component(_IconHairClip.name, _IconHairClip);
  }
});

export default IconHairClip;