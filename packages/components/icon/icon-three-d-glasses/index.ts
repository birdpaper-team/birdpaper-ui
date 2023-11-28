import type { App } from 'vue';
import _IconThreeDGlasses from './icon-three-d-glasses.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconThreeDGlasses.name = getComponentsPrefix() + _IconThreeDGlasses.name;

const IconThreeDGlasses = Object.assign(_IconThreeDGlasses, {
  install: (app: App) => {
    app.component(_IconThreeDGlasses.name, _IconThreeDGlasses);
  }
});

export default IconThreeDGlasses;