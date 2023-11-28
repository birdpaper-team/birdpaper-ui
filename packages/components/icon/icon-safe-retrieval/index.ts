import type { App } from 'vue';
import _IconSafeRetrieval from './icon-safe-retrieval.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSafeRetrieval.name = getComponentsPrefix() + _IconSafeRetrieval.name;

const IconSafeRetrieval = Object.assign(_IconSafeRetrieval, {
  install: (app: App) => {
    app.component(_IconSafeRetrieval.name, _IconSafeRetrieval);
  }
});

export default IconSafeRetrieval;