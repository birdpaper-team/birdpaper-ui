import type { App } from 'vue';
import _IconSippyCup from './icon-sippy-cup.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconSippyCup.name = getComponentsPrefix() + _IconSippyCup.name;

const IconSippyCup = Object.assign(_IconSippyCup, {
  install: (app: App) => {
    app.component(_IconSippyCup.name, _IconSippyCup);
  }
});

export default IconSippyCup;