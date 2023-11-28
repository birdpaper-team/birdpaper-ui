import type { App } from 'vue';
import _IconViewList from './icon-view-list.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconViewList.name = getComponentsPrefix() + _IconViewList.name;

const IconViewList = Object.assign(_IconViewList, {
  install: (app: App) => {
    app.component(_IconViewList.name, _IconViewList);
  }
});

export default IconViewList;