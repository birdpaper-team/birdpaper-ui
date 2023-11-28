import type { App } from 'vue';
import _IconUnorderedList from './icon-unordered-list.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconUnorderedList.name = getComponentsPrefix() + _IconUnorderedList.name;

const IconUnorderedList = Object.assign(_IconUnorderedList, {
  install: (app: App) => {
    app.component(_IconUnorderedList.name, _IconUnorderedList);
  }
});

export default IconUnorderedList;