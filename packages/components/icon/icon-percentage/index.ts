import type { App } from 'vue';
import _IconPercentage from './icon-percentage.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPercentage.name = getComponentsPrefix() + _IconPercentage.name;

const IconPercentage = Object.assign(_IconPercentage, {
  install: (app: App) => {
    app.component(_IconPercentage.name, _IconPercentage);
  }
});

export default IconPercentage;