import type { App } from 'vue';
import _IconLevelNineTitle from './icon-level-nine-title.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconLevelNineTitle.name = getComponentsPrefix() + _IconLevelNineTitle.name;

const IconLevelNineTitle = Object.assign(_IconLevelNineTitle, {
  install: (app: App) => {
    app.component(_IconLevelNineTitle.name, _IconLevelNineTitle);
  }
});

export default IconLevelNineTitle;