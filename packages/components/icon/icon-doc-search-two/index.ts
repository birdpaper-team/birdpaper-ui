import type { App } from 'vue';
import _IconDocSearchTwo from './icon-doc-search-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconDocSearchTwo.name = getComponentsPrefix() + _IconDocSearchTwo.name;

const IconDocSearchTwo = Object.assign(_IconDocSearchTwo, {
  install: (app: App) => {
    app.component(_IconDocSearchTwo.name, _IconDocSearchTwo);
  }
});

export default IconDocSearchTwo;