import type { App } from 'vue';
import _IconTheater from './icon-theater.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTheater.name = getComponentsPrefix() + _IconTheater.name;

const IconTheater = Object.assign(_IconTheater, {
  install: (app: App) => {
    app.component(_IconTheater.name, _IconTheater);
  }
});

export default IconTheater;