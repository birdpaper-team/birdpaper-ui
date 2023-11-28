import type { App } from 'vue';
import _IconChildrenPyramid from './icon-children-pyramid.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChildrenPyramid.name = getComponentsPrefix() + _IconChildrenPyramid.name;

const IconChildrenPyramid = Object.assign(_IconChildrenPyramid, {
  install: (app: App) => {
    app.component(_IconChildrenPyramid.name, _IconChildrenPyramid);
  }
});

export default IconChildrenPyramid;