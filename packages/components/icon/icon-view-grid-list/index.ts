import type { App } from 'vue';
import _IconViewGridList from './icon-view-grid-list.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconViewGridList.name = getComponentsPrefix() + _IconViewGridList.name;

const IconViewGridList = Object.assign(_IconViewGridList, {
  install: (app: App) => {
    app.component(_IconViewGridList.name, _IconViewGridList);
  }
});

export default IconViewGridList;