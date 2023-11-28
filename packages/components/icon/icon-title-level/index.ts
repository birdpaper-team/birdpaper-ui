import type { App } from 'vue';
import _IconTitleLevel from './icon-title-level.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconTitleLevel.name = getComponentsPrefix() + _IconTitleLevel.name;

const IconTitleLevel = Object.assign(_IconTitleLevel, {
  install: (app: App) => {
    app.component(_IconTitleLevel.name, _IconTitleLevel);
  }
});

export default IconTitleLevel;