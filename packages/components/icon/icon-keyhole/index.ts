import type { App } from 'vue';
import _IconKeyhole from './icon-keyhole.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconKeyhole.name = getComponentsPrefix() + _IconKeyhole.name;

const IconKeyhole = Object.assign(_IconKeyhole, {
  install: (app: App) => {
    app.component(_IconKeyhole.name, _IconKeyhole);
  }
});

export default IconKeyhole;