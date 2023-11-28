import type { App } from 'vue';
import _IconFacialCleanser from './icon-facial-cleanser.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconFacialCleanser.name = getComponentsPrefix() + _IconFacialCleanser.name;

const IconFacialCleanser = Object.assign(_IconFacialCleanser, {
  install: (app: App) => {
    app.component(_IconFacialCleanser.name, _IconFacialCleanser);
  }
});

export default IconFacialCleanser;