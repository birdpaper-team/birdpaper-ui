import type { App } from 'vue';
import _IconDropDownList from './icon-drop-down-list.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDropDownList.name = getComponentsPrefix() + _IconDropDownList.name;

const IconDropDownList = Object.assign(_IconDropDownList, {
  install: (app: App) => {
    app.component(_IconDropDownList.name, _IconDropDownList);
  }
});

export default IconDropDownList;