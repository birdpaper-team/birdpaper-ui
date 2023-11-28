import type { App } from 'vue';
import _IconOneThirdRotation from './icon-one-third-rotation.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconOneThirdRotation.name = getComponentsPrefix() + _IconOneThirdRotation.name;

const IconOneThirdRotation = Object.assign(_IconOneThirdRotation, {
  install: (app: App) => {
    app.component(_IconOneThirdRotation.name, _IconOneThirdRotation);
  }
});

export default IconOneThirdRotation;