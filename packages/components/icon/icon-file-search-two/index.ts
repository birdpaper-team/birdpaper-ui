import type { App } from 'vue';
import _IconFileSearchTwo from './icon-file-search-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFileSearchTwo.name = getComponentsPrefix() + _IconFileSearchTwo.name;

const IconFileSearchTwo = Object.assign(_IconFileSearchTwo, {
  install: (app: App) => {
    app.component(_IconFileSearchTwo.name, _IconFileSearchTwo);
  }
});

export default IconFileSearchTwo;