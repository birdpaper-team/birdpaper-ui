import type { App } from 'vue';
import _IconNeutralFace from './icon-neutral-face.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconNeutralFace.name = getComponentsPrefix() + _IconNeutralFace.name;

const IconNeutralFace = Object.assign(_IconNeutralFace, {
  install: (app: App) => {
    app.component(_IconNeutralFace.name, _IconNeutralFace);
  }
});

export default IconNeutralFace;