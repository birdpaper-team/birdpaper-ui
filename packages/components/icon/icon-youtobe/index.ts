import type { App } from 'vue';
import _IconYoutobe from './icon-youtobe.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconYoutobe.name = getComponentsPrefix() + _IconYoutobe.name;

const IconYoutobe = Object.assign(_IconYoutobe, {
  install: (app: App) => {
    app.component(_IconYoutobe.name, _IconYoutobe);
  }
});

export default IconYoutobe;