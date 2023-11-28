import type { App } from 'vue';
import _IconReverseRotation from './icon-reverse-rotation.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconReverseRotation.name = getComponentsPrefix() + _IconReverseRotation.name;

const IconReverseRotation = Object.assign(_IconReverseRotation, {
  install: (app: App) => {
    app.component(_IconReverseRotation.name, _IconReverseRotation);
  }
});

export default IconReverseRotation;