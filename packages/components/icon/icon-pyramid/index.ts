import type { App } from 'vue';
import _IconPyramid from './icon-pyramid.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPyramid.name = getComponentsPrefix() + _IconPyramid.name;

const IconPyramid = Object.assign(_IconPyramid, {
  install: (app: App) => {
    app.component(_IconPyramid.name, _IconPyramid);
  }
});

export default IconPyramid;