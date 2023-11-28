import type { App } from 'vue';
import _IconRecyclingPool from './icon-recycling-pool.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRecyclingPool.name = getComponentsPrefix() + _IconRecyclingPool.name;

const IconRecyclingPool = Object.assign(_IconRecyclingPool, {
  install: (app: App) => {
    app.component(_IconRecyclingPool.name, _IconRecyclingPool);
  }
});

export default IconRecyclingPool;