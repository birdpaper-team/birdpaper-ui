import type { App } from 'vue';
import _IconSeo from './icon-seo.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSeo.name = getComponentsPrefix() + _IconSeo.name;

const IconSeo = Object.assign(_IconSeo, {
  install: (app: App) => {
    app.component(_IconSeo.name, _IconSeo);
  }
});

export default IconSeo;