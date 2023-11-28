import type { App } from 'vue';
import _IconList from './icon-list.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconList.name = getComponentsPrefix() + _IconList.name;

const IconList = Object.assign(_IconList, {
  install: (app: App) => {
    app.component(_IconList.name, _IconList);
  }
});

export default IconList;