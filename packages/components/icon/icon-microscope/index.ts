import type { App } from 'vue';
import _IconMicroscope from './icon-microscope.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMicroscope.name = getComponentsPrefix() + _IconMicroscope.name;

const IconMicroscope = Object.assign(_IconMicroscope, {
  install: (app: App) => {
    app.component(_IconMicroscope.name, _IconMicroscope);
  }
});

export default IconMicroscope;