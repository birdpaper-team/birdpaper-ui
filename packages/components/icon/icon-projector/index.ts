import type { App } from 'vue';
import _IconProjector from './icon-projector.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconProjector.name = getComponentsPrefix() + _IconProjector.name;

const IconProjector = Object.assign(_IconProjector, {
  install: (app: App) => {
    app.component(_IconProjector.name, _IconProjector);
  }
});

export default IconProjector;