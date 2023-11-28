import type { App } from 'vue';
import _IconWorker from './icon-worker.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconWorker.name = getComponentsPrefix() + _IconWorker.name;

const IconWorker = Object.assign(_IconWorker, {
  install: (app: App) => {
    app.component(_IconWorker.name, _IconWorker);
  }
});

export default IconWorker;