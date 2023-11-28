import type { App } from 'vue';
import _IconMindmapList from './icon-mindmap-list.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconMindmapList.name = getComponentsPrefix() + _IconMindmapList.name;

const IconMindmapList = Object.assign(_IconMindmapList, {
  install: (app: App) => {
    app.component(_IconMindmapList.name, _IconMindmapList);
  }
});

export default IconMindmapList;