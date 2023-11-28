import type { App } from 'vue';
import _IconParallelogram from './icon-parallelogram.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconParallelogram.name = getComponentsPrefix() + _IconParallelogram.name;

const IconParallelogram = Object.assign(_IconParallelogram, {
  install: (app: App) => {
    app.component(_IconParallelogram.name, _IconParallelogram);
  }
});

export default IconParallelogram;