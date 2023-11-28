import type { App } from 'vue';
import _IconCategoryManagement from './icon-category-management.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconCategoryManagement.name = getComponentsPrefix() + _IconCategoryManagement.name;

const IconCategoryManagement = Object.assign(_IconCategoryManagement, {
  install: (app: App) => {
    app.component(_IconCategoryManagement.name, _IconCategoryManagement);
  }
});

export default IconCategoryManagement;