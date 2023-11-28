import type { App } from 'vue';
import _IconMindmapMap from './icon-mindmap-map.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMindmapMap.name = getComponentsPrefix() + _IconMindmapMap.name;

const IconMindmapMap = Object.assign(_IconMindmapMap, {
  install: (app: App) => {
    app.component(_IconMindmapMap.name, _IconMindmapMap);
  }
});

export default IconMindmapMap;