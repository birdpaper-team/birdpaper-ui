import type { App } from 'vue';
import _IconStereoPerspective from './icon-stereo-perspective.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconStereoPerspective.name = getComponentsPrefix() + _IconStereoPerspective.name;

const IconStereoPerspective = Object.assign(_IconStereoPerspective, {
  install: (app: App) => {
    app.component(_IconStereoPerspective.name, _IconStereoPerspective);
  }
});

export default IconStereoPerspective;