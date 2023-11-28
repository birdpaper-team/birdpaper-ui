import type { App } from 'vue';
import _IconPageTemplate from './icon-page-template.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPageTemplate.name = getComponentsPrefix() + _IconPageTemplate.name;

const IconPageTemplate = Object.assign(_IconPageTemplate, {
  install: (app: App) => {
    app.component(_IconPageTemplate.name, _IconPageTemplate);
  }
});

export default IconPageTemplate;