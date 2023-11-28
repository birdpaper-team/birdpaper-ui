import type { App } from 'vue';
import _IconOrderedList from './icon-ordered-list.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOrderedList.name = getComponentsPrefix() + _IconOrderedList.name;

const IconOrderedList = Object.assign(_IconOrderedList, {
  install: (app: App) => {
    app.component(_IconOrderedList.name, _IconOrderedList);
  }
});

export default IconOrderedList;