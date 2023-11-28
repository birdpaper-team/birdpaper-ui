import type { App } from 'vue';
import _IconReduce from './icon-reduce.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReduce.name = getComponentsPrefix() + _IconReduce.name;

const IconReduce = Object.assign(_IconReduce, {
  install: (app: App) => {
    app.component(_IconReduce.name, _IconReduce);
  }
});

export default IconReduce;